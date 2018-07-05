import React, { Component } from "react";
import { StyleSheet } from "react-native";
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
            <ListItem itemDivider style={styles.itemDivider}>
              <Text />
            </ListItem>
            <ListItem
              onPressOut={() => {
                this.props.navigation.navigate("Feedback");
              }}
              style={styles.item}
            >
              <Left>
                <Text>피드백</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem itemDivider style={styles.itemDivider}>
              <Text />
            </ListItem>
            <ListItem
              onPressOut={async () => {
                await WebBrowser.openBrowserAsync(
                  "http://righthere.world/todays_exhibition_terms.html"
                );
              }}
              style={styles.item}
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
              style={styles.item}
            >
              <Left>
                <Text>개인정보처리방침</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem itemDivider style={styles.itemDivider}>
              <Text />
            </ListItem>
            <ListItem
              onPressOut={() => this.props.logOut()}
              style={styles.item}
            >
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

const styles = StyleSheet.create({
  itemDivider: {
    backgroundColor: "#e9e9ef"
  },
  item: {
    backgroundColor: "white",
    marginLeft: 0,
    paddingLeft: 20
  }
});

export default Presenter;
