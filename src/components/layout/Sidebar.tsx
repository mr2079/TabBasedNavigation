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
          <a href="#" className="nav-link active" aria-current="page">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            Orders
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            Products
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            Customers
          </a>
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
