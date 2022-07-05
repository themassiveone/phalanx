import MailIcon from "@mui/icons-material/Mail";
import AlarmIcon from "@mui/icons-material/Alarm";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface NavbarProps {}

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SearchBar = styled(Box)({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "10px",
  width: "40%",
});

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: { display: "none" },
}));

const IconBar = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: { display: "flex" },
}));

const Navbar: React.FC<NavbarProps> = ({}) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<
    null | Element | ((element: Element) => Element)
  >(null);
  const handleMenu = (event: MouseEvent) => {
    setAnchorEl(event.currentTarget as Element);
    setOpen(true);
  };
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          MassiveCreationLab
        </Typography>
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
          <IconButton
            onClick={() => {
              console.log("mail sent");
            }}
          ></IconButton>
          <Badge badgeContent={18} color={"error"}>
            <AlarmIcon></AlarmIcon>
          </Badge>

          <Avatar
            onClick={(e) => {
              handleMenu(e as any);
            }}
            src=""
          ></Avatar>
        </IconBar>
        <UserBox
          onClick={(e) => {
            handleMenu(e as any);
          }}
        >
          <Typography variant="h6">TestName</Typography>
          <Avatar src=""></Avatar>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        anchorEl={anchorEl}
        onClose={() => {
          setOpen(false);
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
