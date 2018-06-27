import React from 'react';
import { View, Text, StyleSheet, Vibration, Dimensions } from 'react-native';
import Camera, {RNCamera} from 'react-native-camera';

const window = Dimensions.get('window');

class ScannerScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      cameraType: Camera.constants.Type.back,
      qrData: '',
    }
  }

  _handleBarCodeRead(e) {
    Vibration.vibrate();
    this.setState({qrData: e.data});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rectangleContainer}>
          <Camera
            style={styles.camera}
            type={this.state.cameraType}
            onBarCodeRead={this._handleBarCodeRead.bind(this)}
          >
            <View style={styles.rectangleContainer}>
              <View style={styles.rectangle}/>
            </View>
          </Camera>
          <Text>{this.state.qrData}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#3e243f',
      justifyContent: 'center',
      alignItems: 'center',
  },
  camera: {
      flex: 0,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      height: window.width,
      width: window.width,
  },
  rectangleContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
  },
  rectangle: {
      height: 250,
      width: 250,
      borderWidth: 2,
      // borderColor: Colors.pinkRed,
      borderRadius: 10,
      backgroundColor: 'transparent',
  },
});

export default ScannerScreen;
