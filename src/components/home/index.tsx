import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2> Home </h2>
      <Link to="/problem/123">
        <button> Problem 123 </button>
      </Link>
    </div>
  );
};
export default Home;
