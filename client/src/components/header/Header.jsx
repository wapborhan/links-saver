import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="topb-bar bg-[#1d2538] border-b-2 border-[#fca120] py-2 px-4 text-white flex justify-between">
        <div className="time">Today: 22-July-2024, 02:55:00 PM</div>
        <div className="top-menu flex gap-5">
          <div className="social">
            <ul className="flex gap-5">
              <li>FB</li>
              <li>TW</li>
              <li>LN</li>
              <li>YT</li>
            </ul>
          </div>
          <div className="panel">
            <NavLink to="/login">Login</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
