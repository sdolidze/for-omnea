import { Button, TextField } from "@mui/material";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import DescriptionIcon from "@mui/icons-material/Description";
import { Note } from "./types";

export interface NoteListProps {
  notes: Note[];
}

function NoteList(props: NoteListProps) {
  const { notes } = props;

  return (
    <List>
      {notes.map(note => (
        <React.Fragment key={note.id}>
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary={note.text} />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}

      <ListItem sx={{ mt: 2 }}>
        <TextField sx={{ flex: 1, mr: 1 }} label="Note" variant="outlined" />
        <Button size="large" variant="contained">
          Add
        </Button>
      </ListItem>
    </List>
  );
}

export default NoteList;
