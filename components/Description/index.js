import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Left,
  Body,
  Right
} from "native-base";
import PropTypes from "prop-types";

const Description = props => (
  <Container>
    <Content>
      <Card>
        <CardItem>
          {/* <Right> */}
          <Body>
            <Text style={styles.title}>{props.title}</Text>
            <Text>* {props.username}</Text>
          </Body>
          {/* </Right> */}
        </CardItem>
      </Card>
    </Content>
  </Container>
);

const styles = StyleSheet.create({
  title: {
    fontWeight: "800",
    fontSize: 15
  }
});

export default Description;
