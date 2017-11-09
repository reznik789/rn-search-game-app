/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { NativeRouter as Router, Route } from "react-router-native";
import { HomePage, GameGenresPage, GenreSinglePage } from "./src/containers";
import Menu from "./src/components/drawer";

export default class App extends Component {
  render() {
    return (
      <Router>
        <View style={{ flex: 1 }}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/genres" component={GameGenresPage} />
          <Route path="/menu" component={Menu} />
          {/* <Route exact path="/single-genre" component={GenreSinglePage} /> */}
        </View>
      </Router>
    );
  }
}
