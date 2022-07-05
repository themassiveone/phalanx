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
      <Stack direction={"row"} display={"flex"}>
        <Box flex={1}>
          <Sidebar></Sidebar>
        </Box>
        <Box flex={4}>
          <Content></Content>
        </Box>
        <Box flex={2}>
          <Rightbar></Rightbar>
        </Box>
      </Stack>
    </Box>
  );
};

export default Base;
