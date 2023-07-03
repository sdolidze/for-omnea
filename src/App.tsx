import { useQuery } from "@apollo/client";
import { Note } from "./types";
import { NOTE_LIST_QUERY } from "./graphql";
import NoteList from "./NoteList";
import { Container } from "@mui/material";

function App() {
  const { loading, error, data } = useQuery<{ notes: Note[] }>(NOTE_LIST_QUERY);

  if (loading) {
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <p>Error: {error.message}</p>
      </Container>
    );
  }

  if (data === undefined) {
    return (
      <Container>
        <p>Missing data</p>
      </Container>
    );
  }

  return (
    <Container>
      <NoteList notes={data.notes} />
    </Container>
  );
}

export default App;
