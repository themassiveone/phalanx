import { AppBar, Box, styled, Toolbar, Typography } from "@mui/material";

interface NavbarProps {}

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "center",
});

const SearchBar = styled("div")({
  backgroundColor: "white",
});

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6">MassiveCreationLab</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
