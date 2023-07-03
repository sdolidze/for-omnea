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
  onAdd: (text: string) => void;
}

function NoteList(props: NoteListProps) {
  const { notes, onAdd } = props;

  const textRef = React.useRef<HTMLInputElement | null>(null);

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

      <form
        onSubmit={e => {
          e.preventDefault();
          const text = textRef.current!.value;
          textRef.current!.value = "";
          onAdd(text);
        }}
      >
        <ListItem sx={{ mt: 2 }}>
          <TextField inputRef={textRef} sx={{ flex: 1, mr: 1 }} label="Note" variant="outlined" />
          <Button type="submit" size="large" variant="contained">
            Add
          </Button>
        </ListItem>
      </form>
    </List>
  );
}

export default NoteList;
