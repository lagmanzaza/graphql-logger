import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

/** @jsx jsx */
import {css,jsx} from '@emotion/core';

const GET_COUNTRIES = gql`
  {
    countries {
      name
      createdAt
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.countries.map((value: any) => (
    <div css={css`
      margin-top: 100px;
    `} key={value.name}>
      <p>
        {value.name}
        <br />
        {value.createdAt}
      </p>
    </div>
  ));
}

export default App;
