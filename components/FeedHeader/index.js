import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Content, Card, CardItem, Left, Body, Right } from "native-base";
import PropTypes from "prop-types";

const FeedHeader = props => (
  <View>
    <Left>
      <Text>Latest</Text>
    </Left>
    <Right>
      <Text>Like</Text>
    </Right>
  </View>
);

const styles = StyleSheet.create({});

export default FeedHeader;
