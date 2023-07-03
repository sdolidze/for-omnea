import { gql } from "@apollo/client";

export const NOTE_LIST_QUERY = gql`
  query NoteList {
    notes {
      id
      text
      updated_at
    }
  }
`;
