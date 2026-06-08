import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h1>World Wise</h1>

      {/* <a href="/pricing">Pricing</a> */}
      <Link to="/pricing">Pricing</Link>
    </div>
  );
}

export default Homepage;
