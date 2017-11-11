import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { HomePage, GameGenresPage, GenreSinglePage } from "../../containers";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

// drawer stack
const DrawerStack = DrawerNavigator({
  home: { screen: HomePage },
  genres: { screen: GameGenresPage },
  singleGenre: { screen: GenreSinglePage }
});

const DrawerNavigation = StackNavigator(
  {
    DrawerStack: { screen: DrawerStack }
  },
  {
    headerMode: "float",
    navigationOptions: ({ navigation }) => {
      console.log(navigation);
      return {
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        initialRouteName: "home",
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.navigate("DrawerToggle")} ><Icon name='md-menu' color="white" size={25}/></TouchableOpacity>
        )
      };
    }
  }
);

export default DrawerNavigation;
