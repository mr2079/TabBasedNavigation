import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
import TabLink from "../tab/TabLink";

export default function Sidebar() {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
      style={{ width: "300px", height: '100vh' }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <TabLink className="nav-link"
            label="Page 1"
            component={Page1}/>
        </li>
        <li className="nav-item">
          <TabLink className="nav-link"
            label="Page 2"
            component={Page2}/>
        </li>
        <li className="nav-item">
          <TabLink className="nav-link"
            label="Page 3"
            component={Page3}/>
        </li>
      </ul>
      <hr />
      <div>
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mr2079.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mr2079</strong>
        </a>
      </div>
    </div>
  );
}
