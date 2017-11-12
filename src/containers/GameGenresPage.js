import React, { Component } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import GameGenres from "../components/genres";
import * as genresActions from "../actions/genres.actions";

class GameGenresPage extends React.Component {
  static navigationOptions = {
    drawLabel: "Genres",
    title: "Genres"
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { genres, fetching, error, actions } = this.props;
    return (
      <GameGenres
        genres={genres}
        fetching={fetching}
        error={error}
        actions={actions}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  genres: state.genres.genres,
  fetching: state.genres.fetching,
  error: state.genres.error
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(genresActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GameGenresPage);
