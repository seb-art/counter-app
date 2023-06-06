// Stateless Functional Component

const NavBar = ({ totalCounters}) => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div style = {{fontWeight:"bold"}} className="container-fluid">
        <a className="navbar-brand" href="@sebastian">
          CounterApp{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};


export default NavBar;
