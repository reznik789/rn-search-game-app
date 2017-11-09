import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Platform
} from "react-native";
import {Link} from "react-router-native";


class HomePage extends Component {
  get initialized() {
    return this.state.timePassed;
  }

  title = "Home Page";

  constructor(props) {
    super(props);
    this.state = {
      timePassed: false
    };
  }

  componentDidMount() {
    console.log('Home Page loaded')
    setTimeout(() => {
      this.setTimePassed();
    }, 150);
  }

  setTimePassed() {
    this.setState({ timePassed: true });
  }

  render = () => (
    <View style={styles.container} >
      <Link to="/menu" >
        <Text>HomePage</Text>
      </Link>
      <Link to="/menu" >
        <Text>HomePage</Text>
      </Link>
      <Link to="/menu" >
        <Text>HomePage</Text>
      </Link>
      <Link to="/menu" >
        <Text>HomePage</Text>
      </Link>
      <Link to="/menu" >
        <Text>HomePage</Text>
      </Link>
      <Link to="/menu" >
        <Text>HomePage</Text>
      </Link>
      <Link to="/menu" >
        <Text>HomePage</Text>
      </Link>
      <Link to="/menu" >
        <Text>HomePage</Text>
      </Link>
      <Link to="/menu" >
        <Text>HomePage</Text>
      </Link>
      <Link to="/menu" >
        <Text>HomePage</Text>
      </Link>
      <Link to="/menu" >
        <Text>HomePage</Text>
      </Link>
      <Link to="/menu" >
        <Text>HomePage</Text>
      </Link>
      <Link to="/menu" >
        <Text>HomePage</Text>
      </Link>
      <Link to="/menu" >
        <Text>HomePage</Text>
      </Link>
      <Link to="/menu" >
        <Text>HomePage</Text>
      </Link>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default HomePage;
