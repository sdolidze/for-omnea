import { useMutation, useQuery } from "@apollo/client";
import { Note } from "./types";
import { NOTE_INSERT_MUTATION, NOTE_LIST_QUERY } from "./graphql";
import NoteList from "./NoteList";
import { Container } from "@mui/material";

function NoteContainer() {
  const { loading, error, data } = useQuery<{ notes: Note[] }>(NOTE_LIST_QUERY);

  // TODO: add better error handling in the future
  const [insertNote] = useMutation(NOTE_INSERT_MUTATION);

  const handleAdd = (text: string) => {
    insertNote({
      variables: {
        objects: [{ text }],
      },
      // TODO: manually update the cache in the future to achieve better UX
      refetchQueries: [NOTE_LIST_QUERY],
    });
  };

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
      <NoteList notes={data.notes} onAdd={handleAdd} />
    </Container>
  );
}

export default NoteContainer;
