import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Platform
} from "react-native";

class GenreSinglePage extends Component {
  // static navigationOptions = ({ navigation }) => ({
  //   title: `${navigation.state.params.genreName}`
  // });

  get initialized() {
    return this.state.timePassed;
  }

  title = "Genres";

  constructor(props) {
    super(props);
    this.state = {
      timePassed: false
    };
  }

  _getGames = ( genreId ) => {
    
  }

  componentWillMount() {
    const {genre} = this.props.navigation.state;
    if ( !!genre && !!genre.id ) {
      this._getGames(genre.id);
    } else {
      this.props.navigation.goBack();
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setTimePassed();
    }, 150);
  }

  setTimePassed() {
    this.setState({ timePassed: true });
  }

  render = () => (
    <View style={styles.container}>
      <Text>Genre Single</Text>
      <Text>Genre Single</Text>
      <Text>Genre Single</Text>
      <Text>Genre Single</Text>
      <Text>Genre Single</Text>
      <Text>Genre Single</Text>
      <Text>Genre Single</Text>
      <Text>Genre Single</Text>
      <Text>Genre Single</Text>
      <Text>Genre Single</Text>
      <Text>Genre Single</Text>
      <Text>Genre Single</Text>
      <Text>Genre Single</Text>
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

export default GenreSinglePage;
