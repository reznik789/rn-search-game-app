import React, { Component } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { List, ListItem, Tile } from "react-native-elements";
import PropTypes from "prop-types";
import styles from "./styles";

export default class GenreSingle extends Component {
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

  _getGames = genreId => {
    this.props.getGames(genreId);
  };

  componentWillMount() {
    const { genre } = this.props.navigation.state.params;
    if (!!genre && !!genre.id) {
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

  _renderItem = ({ item }) => {
    const imgUrl =
      "https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/" +
      item.screenshots[0].cloudinary_id +
      ".jpg";
    return <Tile imageSrc={{ uri: imgUrl }} title={item.name}/>;
  };

  render = () => {
    const { games, fetching, error } = this.props;
    return !this.initialized || fetching ? (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    ) : (
      <List containerStyle={{ marginTop: 0 }}>
        <FlatList
          data={games}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => item.id}
        />
      </List>
    );
  };
}

GenreSingle.propTypes = {
  games: PropTypes.array.isRequired,
  fetching: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  getGames: PropTypes.func.isRequired
};
