import React from "react";
import { Text } from "react-native";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { HomePage, GameGenresPage, GenreSinglePage } from "../../containers";
import styles from "./styles";

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
          <Text onPress={() => navigation.navigate("DrawerOpen")}>Menu</Text>
        )
      };
    }
  }
);

export default DrawerNavigation;
