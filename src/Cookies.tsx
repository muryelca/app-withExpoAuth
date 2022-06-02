import * as React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text } from "react-native";

const cookiesQuery = gql`
  {
    cookies {
      id
      email
    }
  }
`;

export class Cookies extends React.PureComponent {
  render() {
    return (
      <Query query={cookiesQuery}>
        {({ data }) => {
          return <Text style={{ fontSize: 30 }}>{JSON.stringify(data)}</Text>;
        }}
      </Query>
    );
  }
}
