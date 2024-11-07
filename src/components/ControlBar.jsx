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
  const [topic, setTopic] = useState(searchParams.get("topic"));
  const [sortBy, setSortBy] = useState(searchParams.get("sort_by"));
  const [order, setOrder] = useState(searchParams.get("order"));

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
    if (articles.length !== 10 && num === 1) {
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
          value={topic}
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
        <select
          value={sortBy}
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
            comments
          </option>
        </select>
        <select
          value={order}
          onChange={(e) => {
            setOrder(e.target.value);
          }}
          name="sort_by"
          className="selector"
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
        <button className="page_button" onClick={() => handleClick(-1)}>
          prev
        </button>
        <button className="page_button" onClick={() => handleClick(1)}>
          next
        </button>
      </div>
    </>
  );
}
