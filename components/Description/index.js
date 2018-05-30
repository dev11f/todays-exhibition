import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import { Content, Card, CardItem, Left, Body, Right } from "native-base";
import PropTypes from "prop-types";

const Description = props => (
  <Card>
    <CardItem>
      {/* <Right> */}
      <Body>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.author}>{props.username}</Text>
      </Body>
      {/* </Right> */}
    </CardItem>
  </Card>
);

const styles = StyleSheet.create({
  title: {
    fontWeight: "900",
    fontSize: 14
  },
  author: {
    marginTop: 10,
    fontSize: 12
  }
});

export default Description;
