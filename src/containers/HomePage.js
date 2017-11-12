import React, { Component } from "react";
import Home from "../components/home";

class HomePage extends Component {

  static navigationOptions = {
    drawerLabel: "Home",
    title: "Home"
  };

  constructor(props) {
    super(props);
  }
  
  render = () => (
    <Home/>
  );
}

export default HomePage;
