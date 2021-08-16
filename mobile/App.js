import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, View} from 'react-native';

import MapView, {Marker} from 'react-native-maps';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 7.4685,
      longitude: 80.62369,
      error: null,
    };
  }

  //  componentDidMount() {
  //    //Get current location and set initial region to this
  //    navigator.geolocation.getCurrentPosition(
  //      position => {
  //        this.setState({
  //          latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //        });
  //      },
  //      error => this.setState({error: error.message}),
  //     {enableHighAccuracy: true, maximumAge: 2000, timeout: 20000},
  //    );
  //  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 7.4685,
            longitude: 80.62369,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker coordinate={this.state} />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  destinatonInput: {
    height: 40,
    borderWidth: 0.5,
    marginTop: 50,
    marginLeft: 5,
    marginRight: 5,
    padding: 5,
    backgroundColor: '#1111',
  },
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
