import React from "react";
import { Text, TouchableOpacity } from "react-native";
import {
  StackNavigator,
  DrawerNavigator,
  HeaderBackButton
} from "react-navigation";
import { HomePage, GameGenresPage, GenreSinglePage } from "../../containers";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

// drawer stack
const DrawerStack = DrawerNavigator({
  home: { screen: HomePage },
  genres: { screen: GameGenresPage }
});

const DrawerNavigation = StackNavigator(
  {
    DrawerStack: { screen: DrawerStack },
    singleGenre: {
      screen: GenreSinglePage,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.genre.name}`,
        headerLeft: <HeaderBackButton tintColor='white' onPress={() => navigation.goBack(null)} />
      })
    }
  },
  {
    headerMode: "float",
    navigationOptions: ({ navigation }) => {
      return {
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        initialRouteName: "home",
        headerLeft: (
          <TouchableOpacity
            style={styles.headerButton}
            onPress={() => {
              if (navigation.state.index === 0) {
                navigation.navigate("DrawerOpen");
              } else {
                navigation.navigate("DrawerClose");
              }
            }}
          >
            <Icon name="md-menu" color="white" size={25} />
          </TouchableOpacity>
        )
      };
    }
  }
);

export default DrawerNavigation;
