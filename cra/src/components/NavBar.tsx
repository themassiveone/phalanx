interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light p-2 ">
        <a className="navbar-brand" href="#">
          Phalanx
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
