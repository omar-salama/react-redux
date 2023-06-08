import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="NotFound ms-5">
      <h1 className="mt-5">404 | NOT FOUND</h1>
      <button onClick={() => navigate("/")} className="btn btn-secondary">Go Home
      </button>
    </div>
  );
};

export default NotFound;
