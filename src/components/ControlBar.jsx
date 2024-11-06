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

  useEffect(() => {
    getTopics().then((response) => {
      setTopics(response);
    });
  }, []);

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("topic", topic);
    setSearchParams(newParams);
  }, [topic]);

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
      <label className="topic_select">
        <select
          value={topic}
          onChange={(e) => {
            setTopic(e.target.value);
          }}
          name="topics"
          className="topic_select"
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
      <p>order</p>
      <button className="page_button" onClick={() => handleClick(-1)}>
        prev
      </button>
      <button className="page_button" onClick={() => handleClick(1)}>
        next
      </button>
    </div>
  );
}
