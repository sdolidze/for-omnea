import { Box, Button } from "@mui/material";
import { gql, useQuery } from "@apollo/client";

const NOTE_LIST = gql`
  query NoteList {
    notes(limit: 5) {
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
    <Box>
      <Button variant="contained">Hello</Button>
      {data.notes.map(note => (
        <div key={note.id}>
          <p>{note.id}</p>
          <p>{note.text}</p>
          <p>{note.updated_at}</p>
        </div>
      ))}
    </Box>
  );
}

export default App;
