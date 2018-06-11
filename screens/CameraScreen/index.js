import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  CameraRoll,
  StatusBar,
  TouchableOpacity
} from "react-native";
import { Camera, Permissions } from "expo";
import { MaterialIcons } from "@expo/vector-icons";

class CameraScreen extends Component {
  state = {
    hasCameraPermissions: null,
    type: Camera.Constants.Type.front,
    flash: Camera.Constants.FlashMode.off,
    pictureTaken: false,
    picture: null
  };

  componentDidMount = async () => {
    const camera = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermissions: camera.status === "granted"
    });
  };

  render() {
    const {
      hasCameraPermissions,
      type,
      flash,
      pictureTaken,
      picture
    } = this.state;
    const { navigation } = this.props;

    if (hasCameraPermissions === null) {
      return <View />;
    } else if (hasCameraPermissions === false) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>카메라 접근 권한이 없습니다.</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <StatusBar hidden={true} />
          {pictureTaken ? (
            <View />
          ) : (
            <Camera
              type={type}
              flashMode={flash}
              ref={camera => {
                this.camera = camera;
              }}
              style={styles.camera}
            />
          )}

          <View style={styles.btnContainer}>
            {pictureTaken ? (
              <View style={styles.photoActions}>
                <TouchableOpacity>
                  <MaterialIcons name={"cancel"} size={60} color={"black"} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <MaterialIcons
                    name={"check-circle"}
                    size={60}
                    color={"black"}
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center"
                }}
              >
                <TouchableOpacity onPressOut={this._changeType}>
                  <View style={styles.action}>
                    <MaterialIcons
                      name={
                        type === Camera.Constants.Type.back
                          ? "camera-front"
                          : "camera-rear"
                      }
                      color="grey"
                      size={40}
                    />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={styles.btn} />
                </TouchableOpacity>

                <TouchableOpacity onPressOut={this._changeFlash}>
                  <View style={styles.action}>
                    {flash === Camera.Constants.FlashMode.off && (
                      <MaterialIcons
                        name={"flash-off"}
                        color="grey"
                        size={40}
                      />
                    )}
                    {flash === Camera.Constants.FlashMode.on && (
                      <MaterialIcons name={"flash-on"} color="grey" size={40} />
                    )}
                    {flash === Camera.Constants.FlashMode.auto && (
                      <MaterialIcons
                        name={"flash-auto"}
                        color="grey"
                        size={40}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      );
    }
  }

  _changeType = () => {
    this.setState(prevState => {
      if (prevState.type === Camera.Constants.Type.back) {
        return { type: Camera.Constants.Type.front };
      } else {
        return { type: Camera.Constants.Type.back };
      }
    });
  };

  _changeFlash = () => {
    this.setState(prevState => {
      if (prevState.flash === Camera.Constants.FlashMode.off) {
        return { flash: Camera.Constants.FlashMode.on };
      } else if (prevState.flash === Camera.Constants.FlashMode.on) {
        return { flash: Camera.Constants.FlashMode.auto };
      } else if (prevState.flash === Camera.Constants.FlashMode.auto) {
        return { flash: Camera.Constants.FlashMode.off };
      }
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  camera: {
    flex: 3,
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  btnContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderColor: "#bbb",
    borderWidth: 15,
    borderRadius: 50
  },
  action: {
    backgroundColor: "transparent",
    height: 40,
    width: 40,
    margin: 10
  },
  photoActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1,
    alignItems: "center",
    width: 250
  }
});

export default CameraScreen;
