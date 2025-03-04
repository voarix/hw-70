import { NavLink } from "react-router-dom";

const ToolBar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary shadow">
      <div className="container">
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center gap-2">
          <h1>Contacts</h1>
        </NavLink>

        <NavLink to={'/contacts/new-contact'} className="navbar-brand nav-link">
          Add new contact
        </NavLink>
      </div>
    </nav>
  );
};

export default ToolBar;
