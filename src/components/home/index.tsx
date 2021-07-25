import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2> Home</h2>
      <Link to="/problem">
        <button>Problem</button>
      </Link>
    </div>
  );
};
export default Home;
