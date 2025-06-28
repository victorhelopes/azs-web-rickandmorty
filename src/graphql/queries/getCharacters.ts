import { gql, useQuery } from "@apollo/client";
import { apolloClient } from "../../lib/apollo";

export const GET_CHARACTERS = (fields: string) => gql`
  query GetCharacters($page: Int, $name: String) {
    episodes(page: $page, filter: { name: $name }) {
      info{ count, pages, next ,prev}
      results {
        ${fields}
      }
    }
  }
`;


export function useCharacters({fields, page, name}: {fields: string, page: number, name?: string}) {
  const query = GET_CHARACTERS(fields);

  const { data, loading, error } = useQuery(query, {
        variables: { page, name },
        client: apolloClient,
    });

  return { data, loading, error };
}
