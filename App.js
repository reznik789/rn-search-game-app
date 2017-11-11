/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { HomePage } from "./src/containers";
import Navigation from "./src/components/navigation";

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}} >
        <Navigation />
      </View>
    );
  }
}
