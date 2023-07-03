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

  const [text, setText] = React.useState("");

  const error = text.length > 180;

  return (
    <List>
      {notes.map(note => (
        <React.Fragment key={note.id}>
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText sx={{ wordWrap: "break-word" }} primary={note.text} />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}

      <form
        onSubmit={e => {
          e.preventDefault();

          if (error) {
            return;
          }

          onAdd(text);
          setText("");
        }}
      >
        <ListItem sx={{ mt: 2 }}>
          <TextField
            value={text}
            onChange={e => setText(e.target.value)}
            sx={{ flex: 1, mr: 1 }}
            type="text"
            label="Note"
            variant="outlined"
            error={error}
            helperText={error && "Max length is 180 characters"}
          />
          <Button type="submit" size="large" variant="contained">
            Add
          </Button>
        </ListItem>
      </form>
    </List>
  );
}

export default NoteList;
