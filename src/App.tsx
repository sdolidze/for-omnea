import { Button, Container, TextField } from "@mui/material";
import { gql, useQuery } from "@apollo/client";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import DescriptionIcon from "@mui/icons-material/Description";

const NOTE_LIST = gql`
  query NoteList {
    notes {
      id
      text
      updated_at
    }
  }
`;

interface Note {
  id: number;
  text: string;
  updated_at: string;
}

function App() {
  const { loading, error, data } = useQuery<{ notes: Note[] }>(NOTE_LIST);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (data === undefined) {
    return <p>Missing data</p>;
  }

  return (
    <Container>
      <List>
        {data.notes.map(note => (
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
    </Container>
  );
}

export default App;
