import { useEffect, useState } from "react";
import { getTopics } from "../../api";
import Button from "@mui/material/Button";
import { PageArrow } from "./arrow";
import { createTheme, ThemeProvider } from "@mui/material";

export function ControlBar({
  setSearchParams,
  searchParams,
  page,
  articles,
  isLoading,
}) {
  const [topics, setTopics] = useState([]);
  const [topic, setTopic] = useState(searchParams.get("topic"));
  const [sortBy, setSortBy] = useState(searchParams.get("sort_by"));
  const [order, setOrder] = useState(searchParams.get("order"));

  const theme = createTheme({
    palette: {
      next: {
        main: "#3F88C5",
        light: "#81B2D9",
        dark: "#2F6C9D",
        contrastText: "#000000",
      },
      prev: {
        main: "#F49D37",
        light: "#F8BC77",
        dark: "#E9820C",
        contrastText: "#000000",
      },
    },
  });

  useEffect(() => {
    getTopics().then((response) => {
      setTopics(response);
    });
  }, []);

  useEffect(() => {
    setTopic(searchParams.get("topic"));
    setSortBy(searchParams.get("sort_by"));
    setOrder(searchParams.get("order"));
  }, [searchParams]);

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("topic", topic);
    newParams.set("sort_by", sortBy);
    newParams.set("order", order);

    setSearchParams(newParams);
  }, [topic, sortBy, order]);

  function handleClick(num) {
    if (isLoading) {
      return;
    }
    if (Number(page) === 1 && num === -1) {
      return;
    }
    if (articles.length !== 9 && num === 1) {
      return;
    }
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", Number(page) + num);
    setSearchParams(newParams);
  }

  return (
    <>
      <div className="control_bar">
        <select
          disabled={isLoading}
          value={topic}
          onChange={(e) => {
            searchParams.set("page", 1);
            setTopic(e.target.value);
          }}
          name="topics"
          className="form-select"
        >
          <option key={"-"} value={""}>
            All topics
          </option>
          {topics.map((topic) => {
            return (
              <option key={topic} value={topic}>
                {topic}
              </option>
            );
          })}
        </select>
        <select
          disabled={isLoading}
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
          name="sort_by"
          className="form-select"
        >
          <option key="date" value="created_at">
            date
          </option>
          <option key="votes" value="votes">
            votes
          </option>
          <option key="comment_count" value="comment_count">
            comments
          </option>
        </select>
        <select
          disabled={isLoading}
          value={order}
          onChange={(e) => {
            setOrder(e.target.value);
          }}
          name="sort_by"
          className="form-select"
        >
          <option key="desc" value="desc">
            descending
          </option>
          <option key="asc" value="asc">
            ascending
          </option>
        </select>
      </div>
      <div className="page_button_container">
        <ThemeProvider theme={theme}>
          <Button
            onClick={() => handleClick(-1)}
            variant="contained"
            color="prev"
          >
            <PageArrow className="prev_button" />
            Prev
          </Button>
          <Button
            onClick={() => handleClick(1)}
            variant="contained"
            color="next"
          >
            Next
            <PageArrow className="next_button" />
          </Button>
        </ThemeProvider>
      </div>
    </>
  );
}
