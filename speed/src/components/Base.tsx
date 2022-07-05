import { Box, Stack } from "@mui/material";
import Content from "./Content";
import Navbar from "./Navbar";
import Rightbar from "./Rightbar";
import Sidebar from "./Sidebar";

interface BaseProps {}

const Base: React.FC<BaseProps> = ({}) => {
  return (
    <Box>
      <Navbar></Navbar>
      <Stack direction={"row"}>
        <Sidebar></Sidebar>
        <Content></Content>
        <Rightbar></Rightbar>
      </Stack>
    </Box>
  );
};

export default Base;
