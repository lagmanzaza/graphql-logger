import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_COUNTRY = gql`
  {
    countries {
      name
      createdAt
    }
  }
`;

export default function () {
  const { loading, error, data } = useQuery(GET_COUNTRY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.countries.map((value: any) => (
    <div key={value.name}>
      <p>
        {value.name}: {value.createdAt}
      </p>
    </div>
  ));
}
