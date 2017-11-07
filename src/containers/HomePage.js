import React, { Component } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

class HomePage extends React.Component {
  get initialized() {
    return this.state.timePassed;
  }

  constructor(props) {
    super(props);
    this.state = {
      timePassed: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setTimePassed();
    }, 150);
    this._checkIsRegisteredAsDealer();
  }

  setTimePassed() {
    this.setState({ timePassed: true });
  }

  render() {
    return (
      <View style={styles.container}>
        {!this.initialized ? (
          <ActivityIndicator size="large" color="white" />
        ) : (
          <View>
            <Text>HomePage</Text>
            <Text>HomePage</Text>
            <Text>HomePage</Text>
            <Text>HomePage</Text>
            <Text>HomePage</Text>
            <Text>HomePage</Text>
            <Text>HomePage</Text>
          </View>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default HomePage;