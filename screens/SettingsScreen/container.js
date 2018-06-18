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
import { WebBrowser } from "expo";

class Presenter extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text />
            </ListItem>
            <ListItem
              onPressOut={() => {
                this.props.navigation.navigate("Feedback");
              }}
            >
              <Left>
                <Text>피드백</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem itemDivider>
              <Text />
            </ListItem>
            <ListItem
              onPressOut={async () => {
                await WebBrowser.openBrowserAsync(
                  "http://righthere.world/todays_exhibition_terms.html"
                );
              }}
            >
              <Left>
                <Text>이용약관</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem
              // onPressOut={() => this.props.navigation.navigate("Privacy")}
              onPressOut={async () => {
                await WebBrowser.openBrowserAsync(
                  "http://righthere.world/todays_exhibition_privacy.html"
                );
              }}
            >
              <Left>
                <Text>개인정보처리방침</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem itemDivider>
              <Text />
            </ListItem>
            <ListItem onPressOut={() => console.log("로그아웃")}>
              <Left>
                <Text>로그아웃</Text>
              </Left>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default Presenter;
