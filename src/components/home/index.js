import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Platform
} from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

class Home extends Component {
  get initialized() {
    return this.state.timePassed;
  }

  static navigationOptions = {
    drawerLabel: "Home",
    title: "Home"
  };

  constructor(props) {
    super(props);
    this.state = {
      timePassed: false
    };
  }

  componentDidMount() {
    console.log("Home Page loaded");
    setTimeout(() => {
      this.setTimePassed();
    }, 350);
  }

  setTimePassed() {
    this.setState({ timePassed: true });
  }

  render = () => (
    <View style={styles.container}>
      {!this.initialized ? (
        <View>
          <ActivityIndicator color="white" size="large" />
        </View>
      ) : (
        <View style={styles.welcomeContainer}>
          <Icon name="md-build" size={95} color="white" />
          <Text style={styles.welcome}>Welcome</Text>
        </View>
      )}
    </View>
  );
}

export default Home;
