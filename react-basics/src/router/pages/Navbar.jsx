import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul style={{ listStyleType: "none", display: "flex", flexDirection: "row" , justifyContent:"space-around"}}>
          <li>
            <Link to="/instagram/">Home</Link>
          </li>
          <li>
            <Link to="/instagram/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/instagram/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;