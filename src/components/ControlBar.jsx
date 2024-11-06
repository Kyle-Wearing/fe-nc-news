import { useEffect, useState } from "react";
import { getTopics } from "../../api";

export function ControlBar({
  setSearchParams,
  searchParams,
  page,
  articles,
  isLoading,
}) {
  const [topics, setTopics] = useState([]);
  const [topic, setTopic] = useState("");
  const [sortBy, setSortBy] = useState("created_at");

  useEffect(() => {
    getTopics().then((response) => {
      setTopics(response);
    });
  }, []);

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("topic", topic);
    newParams.set("sort_by", sortBy);
    setSearchParams(newParams);
  }, [topic, sortBy]);

  function handleClick(num) {
    if (isLoading) {
      return;
    }
    if (Number(page) === 1 && num === -1) {
      return;
    }
    if (articles.length !== 10 && num === 1) {
      return;
    }
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", Number(page) + num);
    setSearchParams(newParams);
  }

  return (
    <div className="control_bar">
      <label className="selector">
        <select
          value={searchParams.get("topic")}
          onChange={(e) => {
            setTopic(e.target.value);
          }}
          name="topics"
          className="selector"
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
      </label>
      <label className="selector">
        <select
          value={searchParams.get("sort_by")}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
          name="sort_by"
          className="selector"
        >
          <option key="date" value="created_at">
            date
          </option>
          <option key="votes" value="votes">
            votes
          </option>
          <option key="comment_count" value="comment_count">
            comment count
          </option>
        </select>
      </label>
      <button className="page_button" onClick={() => handleClick(-1)}>
        prev
      </button>
      <button className="page_button" onClick={() => handleClick(1)}>
        next
      </button>
    </div>
  );
}
