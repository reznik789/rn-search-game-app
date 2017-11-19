import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Platform
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import GenreSingle from "../components/genre-single";
import * as gamesActions from "../actions/games.actions";

class GenreSinglePage extends Component {
  render = () => (
    <GenreSingle
      games={this.props.games}
      fetching={this.props.fetching}
      error={this.props.error}
      getGames={this.props.actions.getGames}
      navigation={this.props.navigation}
    />
  );
}

const mapStateToProps = (state, ownProps) => ({
  games: state.games.games,
  fetching: state.games.fetching,
  error: state.games.error
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(gamesActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreSinglePage);
