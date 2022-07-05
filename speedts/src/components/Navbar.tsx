import MailIcon from "@mui/icons-material/Mail";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";

interface NavbarProps {}

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SearchBar = styled("div")({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "10px",
  width: "40%",
});

const IconBar = styled("div")({});

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <AppBar>
      <StyledToolbar>
        <Typography variant="h6">MassiveCreationLab</Typography>
        <SearchBar>
          <InputBase placeholder="Searching..." />
        </SearchBar>
        <IconBar>
          <IconButton
            onClick={() => {
              console.log("mail sent");
            }}
          >
            <Badge badgeContent={4} color={"error"}>
              <MailIcon></MailIcon>
            </Badge>
          </IconButton>
        </IconBar>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
