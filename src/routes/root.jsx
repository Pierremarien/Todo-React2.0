import { Outlet, Link } from "react-router-dom";
export default function Root() {
    return (
      <>
        <nav className="navbar">
          <h1>What to do</h1>
            <ul>
              <li>
                <Link to={`/todo`}>To Do</Link>
              </li>
              <li>
                <Link to ={`/calendar`}>Calendar</Link>
              </li>
            </ul>
          </nav>
        <div id="detail">
          <Outlet />
        </div>
      </>
    );
  }