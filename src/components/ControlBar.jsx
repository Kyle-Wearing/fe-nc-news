export function ControlBar({
  setSearchParams,
  searchParams,
  page,
  articles,
  isLoading,
}) {
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
      <p>filter</p>
      <p>order</p>
      <button onClick={() => handleClick(-1)}>prev</button>
      <button onClick={() => handleClick(1)}>next</button>
    </div>
  );
}
