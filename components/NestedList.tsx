import {
  Box,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";

import {
  Send,
  Drafts,
  Inbox,
  ExpandLess,
  ExpandMore,
  StarBorder,
  Cake,
} from "@mui/icons-material";
import { ReactNode, useState } from "react";
import React from "react";

interface NestedListProps {
  items: DataElement[];
}

export interface DataElement {
  id: string;
  label: string;
  subLabel?: string;
  icon?: ReactNode;
  subElements?: DataElement[];
}

interface Map {
  [key: string]: boolean;
}

const NestedList: React.FC<NestedListProps> = ({ items }) => {
  const getInitialBits = (): Map => {
    const bitsStub: Map = {};
    items.map((element) => {
      bitsStub[element.id] = false;
    });
    return bitsStub;
  };

  const [openBits, setOpenBits] = useState<Map>(getInitialBits());

  const renderElement = (
    element: DataElement,
    indentationCounter: number
  ): JSX.Element => {
    return (
      <Box key={element.id} sx={{ pl: 2 * indentationCounter }}>
        <ListItem
          component={"div"}
          sx={{ pl: 2 * indentationCounter }}
          secondaryAction={
            element.subElements &&
            element.subElements.length > 0 && (
              <IconButton
                edge="end"
                aria-label="comments"
                onClick={() => handleClick(element.id)}
              >
                {openBits[element.id] ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            )
          }
        >
          <ListItemButton
            onClick={() =>
              console.log("main action on button clicked of " + element.id)
            }
          >
            <ListItemIcon>{element.icon}</ListItemIcon>
            <ListItemText
              primary={element.label}
              secondary={element.subLabel}
            />
          </ListItemButton>
        </ListItem>
        {element.subElements && (
          <Collapse in={openBits[element.id]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {element.subElements.map((subElement) =>
                renderElement(subElement, ++indentationCounter)
              )}
            </List>
          </Collapse>
        )}
      </Box>
    );
  };

  const handleClick = (index: string) => {
    const clone = { ...openBits };
    clone[index] = !openBits[index];
    setOpenBits(clone);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      {items.map((element) => renderElement(element, 0))}
    </List>
  );
};

export default NestedList;
/* 
const old = () => (
  <List>
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="comments"
          onClick={() => handleClick(1)}
        >
          {openBits[1] ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      }
    >
      <ListItemButton
        onClick={() => console.log("main action on button clicked")}
      >
        <ListItemIcon>
          <Cake />
        </ListItemIcon>
        <ListItemText primary="-1" />
      </ListItemButton>
    </ListItem>

    <ListItemButton onClick={() => handleClick(1)}>
      <ListItemText primary="0" />
      {openBits[1] ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>

    <Collapse in={openBits[1]} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }} onClick={() => handleClick(2)}>
          <ListItemText primary="1" />
          {openBits[2] ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openBits[2]} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 8 }}>
              <ListItemText primary="2" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Collapse>
  </List>
); */
