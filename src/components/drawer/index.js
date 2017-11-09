import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { COLOR, ThemeProvider } from "react-native-material-ui";
import { Drawer, Toolbar, Avatar } from "react-native-material-ui";
import { menuItems } from "./menu.items";
import { withRouter } from "react-router";

const DrawerHeader = Drawer.Header;
const DrawerSection = Drawer.Section;

const uiTheme = {
  palette: {
    primaryColor: COLOR.green500
  },
  toolbar: {
    container: {
      height: 50
    }
  }
};

class MenuDrawer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <View
          style={{
            flex: 1
          }}
        >
          <Toolbar
            leftElement="arrow-back"
            centerElement={"Menu"}
            onLeftElementPress={() => this.props.history.goBack()}
          />
          <View style={styles.container}>
            <Drawer>
              {/* <Drawer.Header>
                <Drawer.Header.Account
                  avatar={<Avatar text={"K"} />}
                  accounts={[
                    { avatar: <Avatar text="H" /> },
                    { avatar: <Avatar text="L" /> }
                  ]}
                  footer={{
                    dense: true,
                    centerElement: {
                      primaryText: "Kevin Le",
                      secondaryText: "kevin@codeprototype.com"
                    },
                    rightElement: "arrow-drop-down"
                  }}
                />
              </Drawer.Header> */}
              <Drawer.Section
                items={[
                  {
                    icon: "bookmark-border",
                    value: "Home",
                    onPress: () => this.props.history.replace("/")
                  }                 
                ]}
              />
            </Drawer>
          </View>
        </View>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 260,
    elevation: 4,
    backgroundColor: "white"
  }
});

export default withRouter(MenuDrawer);
