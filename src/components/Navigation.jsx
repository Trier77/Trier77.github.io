import { NavLink } from "react-router-dom";
// import Header from "./Header";

export default function Navigation() {
  return(
<nav>
  
    <NavLink to="/" end>
    Home
  </NavLink>
  <NavLink to="/projects">Projects</NavLink>
  <NavLink to="/about">About</NavLink>
  <NavLink to="/contact">Contact</NavLink>
  
  
</nav>
  );
}

