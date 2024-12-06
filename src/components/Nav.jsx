import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/contactinfo"}>Contact info</NavLink>
      <NavLink to={"/examples"}>Examples</NavLink>
    </nav>
  );
};

export default Nav;
