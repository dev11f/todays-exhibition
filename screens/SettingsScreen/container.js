import React, { Component } from "react";
import { StyleSheet, BackHandler } from "react-native";
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
  _didFocusSubscription;
  _willBlurSubscription;

  constructor(props) {
    super(props);
    this._didFocusSubscription = props.navigation.addListener(
      "didFocus",
      payload => {
        BackHandler.addEventListener(
          "hardwareBackPress",
          this._onBackButtonPressAndroid
        );
      }
    );
  }

  componentDidMount() {
    this._willBlurSubscription = this.props.navigation.addListener(
      "willBlur",
      payload =>
        BackHandler.removeEventListener(
          "hardwareBackPress",
          this._onBackButtonPressAndroid
        )
    );
  }

  _onBackButtonPressAndroid = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }

    dispatch(NavigationActions.back());
    return true;
  };

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
  }

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
