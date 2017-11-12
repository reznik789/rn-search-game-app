import React, { Component } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import GameGenres from "../components/genres";
import { connect } from "react-redux";

class GameGenresPage extends React.Component {

  static navigationOptions = {
    drawLabel: "Genres",
    title: "Genres"
  }

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return <GameGenres />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  genres: state.genres.genres,
  fetching: state.genres.fetching,
  error: state.genres.error
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(GameGenresPage);
