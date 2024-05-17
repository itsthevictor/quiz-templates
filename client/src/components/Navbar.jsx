import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="links">
          <NavLink to="quiz">simple quiz</NavLink>
          <NavLink to="buffed-up-quiz">buffed-up quiz</NavLink>
          <NavLink to="poll">simple poll</NavLink>
          <NavLink to="complex-poll">complex poll</NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
