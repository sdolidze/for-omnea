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

export const NOTE_INSERT_MUTATION = gql`
  mutation NoteInsert($objects: [notes_insert_input!]!) {
    insert_notes(objects: $objects) {
      returning {
        id
        text
        created_at
        updated_at
      }
    }
  }
`;
