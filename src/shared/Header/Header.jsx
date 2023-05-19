import { useContext } from "react";
import { FaBattleNet, FaUserShield } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="navbar py-4 my-4">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/alltoy">All Toys</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-2xl font-extrabold text-primary"
        >
          <FaBattleNet size={60} /> Minimal TOYS
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/alltoy">All Toys</Link>
          </li>
          {user ? (
            <div className="flex">
              <li>
                <Link to="/mytoys">My Toys</Link>
              </li>
              <li>
                <Link to="/addtoy">Add A Toy</Link>
              </li>
            </div>
          ) : (
            <></>
          )}
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex flex-row items-center gap-5">
            <label
              className="tooltip"
              data-tip={`${user.displayName ? user.displayName : ""}`}
            >
              <div className="w-10 ">
                {user.photoURL ? (
                  <img src={`${user?.photoURL}`} alt="" className="rounded-full" />
                ) : (
                  <FaUserShield size={30} color="#ff3811"/>
                )}
              </div>
            </label>
            <button className="btn btn-primary text-white font-bold" onClick={handleLogOut}>
              Log Out
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn btn-primary text-white rounded-md font-bold"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
