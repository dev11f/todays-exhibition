import React, { Component } from "react";
// import { View, Text } from "react-native";
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Icon,
  Right,
  Left
} from "native-base";
import PropTypes from "prop-types";

class Presenter extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>피드백</Text>
            </ListItem>
            <ListItem>
              <Left>
                <Text>피드백</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem itemDivider>
              <Text>약관</Text>
            </ListItem>
            <ListItem>
              <Left>
                <Text>이용약관</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem onPressOut={() => console.log("개인정보보호")}>
              <Left>
                <Text>개인정보보호</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default Presenter;
