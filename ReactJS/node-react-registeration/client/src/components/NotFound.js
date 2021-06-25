export const NotFound = (props) => {
  return (
    <div className="NotFound ms-5">
      <h1 className="mt-5">404 | NOT FOUND</h1>
      <button onClick={() => props.history.push("/")} className="btn btn-secondary">&lt;&lt;Go Home
      </button>
    </div>
  );
};
