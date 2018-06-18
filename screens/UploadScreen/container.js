import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";
import UploadScreen from "./presenter";

class Container extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      headerRight: (
        <TouchableOpacity onPressOut={() => params.submitArt()}>
          <View>
            <Image
              source={require("../../assets/images/ok.png")}
              style={{ paddingHorizontal: 25, width: 20, height: 20 }}
              resizeMode={"contain"}
            />
          </View>
        </TouchableOpacity>
      )
    };
  };

  state = {
    caption: "",
    isSubmitting: false,
    captionLengthAvailable: 20
  };

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({
      submitArt: this._submitArt
    });
  }

  render() {
    const {
      navigation: {
        state: {
          params: { url }
        }
      }
    } = this.props;

    return (
      <UploadScreen
        imageURL={url}
        handleText={this._handleText}
        {...this.state}
      />
    );
  }

  _handleText = text => {
    const { caption, captionLengthAvailable } = this.state;
    this.setState({
      captionLengthAvailable: 20 - text.length,
      caption: text
    });
    console.log(captionLengthAvailable);
  };

  _submitArt = () => {
    console.log("submit art");
  };
}

export default Container;
