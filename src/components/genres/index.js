import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList
} from "react-native";
import { List, ListItem } from "react-native-elements";

class GameGenres extends React.Component {
  get initialized() {
    return this.state.timePassed;
  }

  constructor(props) {
    super(props);
    this.state = {
      timePassed: false
    };
  }

  _getGenres = () => {
    this.props.actions.getGenres();
  };

  componentDidMount() {
    if (this.props.genres.length === 0) {
      this._getGenres();
    }
    setTimeout(() => {
      this.setTimePassed();
    }, 150);
  }

  setTimePassed() {
    this.setState({ timePassed: true });
  }

  _goToSingleGenre = genre => {
    this.props.navigation.navigate("singleGenre", {
      genre
    });
  };

  _renderItem = ({ item }) => (
    <ListItem
      onPress={() => this._goToSingleGenre(item)}
      title={`${item.name}`}
    />
  );

  render() {
    const { genres, fetching, error } = this.props;
    return !this.initialized || fetching ? (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    ) : (
      <List containerStyle={{ marginTop: 0 }}>
        <FlatList
          data={genres}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => item.id}
        />
      </List>
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

export default GameGenres;
