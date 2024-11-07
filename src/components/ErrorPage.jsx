import { useLocation, useNavigate } from "react-router-dom";

export function ErrorPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const error = state ? state.err : "";

  console.log(error);

  return (
    <div className="error_card">
      {error ? (
        <h1>{`404 ${error} not found`}</h1>
      ) : (
        <h1>Something went wrong</h1>
      )}
      <button
        className="error_button"
        onClick={() => {
          navigate("/");
        }}
      >
        Back to home
      </button>
    </div>
  );
}
