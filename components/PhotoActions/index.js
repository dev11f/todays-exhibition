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
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

const PhotoActions = props => (
  <Container>
    <Content>
      <Card>
        {/* <CardItem> */}
        {/* <Right> */}
        <Body>
          <View style={styles.action}>
            <View>
              <Ionicons name={"ios-thumbs-up-outline"} />
              <Text> {props.like_count}</Text>
            </View>
            <View>
              <Ionicons name={"ios-thumbs-down-outline"} />
              <Text> {props.hate_count}</Text>
            </View>
          </View>
          <View style={styles.action}>
            {/* <Ionicons name={"ios-thumbs-down-outline"} />
            <Text> {props.hate_count}</Text> */}
          </View>
        </Body>
        {/* </Right> */}
        {/* </CardItem> */}
      </Card>
    </Content>
  </Container>
);

const styles = StyleSheet.create({
  action: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default PhotoActions;
