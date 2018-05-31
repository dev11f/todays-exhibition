import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Content, Card, CardItem, Left, Body, Right } from "native-base";
import PropTypes from "prop-types";
import Ionicons from "react-native-vector-icons/Ionicons";

const Description = props => (
  <Card>
    <CardItem>
      <View style={styles.container}>
        <View style={{ flex: 3 }}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.author}>{props.username}</Text>
        </View>

        <View style={styles.options}>
          <TouchableOpacity>
            <View>
              <Ionicons name={"md-more"} size={15} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require("../../assets/images/arrow.png")}
              width={5}
              height={2}
            />
          </TouchableOpacity>
        </View>
      </View>
    </CardItem>
  </Card>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  options: {
    flex: 0.3,
    justifyContent: "space-between",
    alignItems: "flex-end"
  },

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
