import React, { Component } from "react";
import Home from "./Home";
import ProjectDirectory from "./ProjectDirectory";
import ProjectInfo from "./ProjectInfo";
import Contact from "./Contact";
import {
  View,
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  Image,
} from "react-native";
import { Icon } from "react-native-elements";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import SafeAreaView from "react-native-safe-area-view";

const DirectoryNavigator = createStackNavigator(
  {
    ProjectDirectory: {
      screen: ProjectDirectory,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <Icon
            name="laptop"
            type="font-awesome"
            iconStyle={styles.stackIcon}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }),
    },
    ProjectInfo: { screen: ProjectInfo },
  },
  {
    initialRouteName: "ProjectDirectory",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#727072",
      },
      headerTintColor: "#e6cfbf",
      headerTitleStyle: {
        color: "#e6cfbf",
      },
    },
  }
);

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#727072",
      },
      headerTintColor: "#e6cfbf",
      headerTitleStyle: {
        color: "#e6cfbf",
      },
      headerLeft: (
        <Icon
          name="code"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const ContactNavigator = createStackNavigator(
  {
    Contact: { screen: Contact },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#727072",
      },
      headerTintColor: "#e6cfbf",
      headerTitleStyle: {
        color: "#e6cfbf",
      },
      headerLeft: (
        <Icon
          name="envelope"
          type="font-awesome"
          iconStyle={styles.stackIcon}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <View style={styles.drawerHeader}>
        <View style={{ flex: 1 }}>
          <Image
            source={require("./images/kp-temp-logo.png")}
            style={styles.drawerImage}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.drawerHeaderText}>katherineparker</Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const MainNavigator = createDrawerNavigator(
  {
    KatherineParker: {
      screen: HomeNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="code" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    Projects: {
      screen: DirectoryNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="laptop" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
    Contact: {
      screen: ContactNavigator,
      navigationOptions: {
        drawerLabel: "Contact",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="envelope"
            type="font-awesome"
            size={24}
            color={tintColor}
          />
        ),
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: "#ae7862",
      inactiveTintColor: "#e6cfbf",
    },
    drawerBackgroundColor: "#727072",
    contentComponent: CustomDrawerContentComponent,
  }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop:
            Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
        }}
      >
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: "#727072",
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    marginRight: 10,
  },
  drawerHeaderText: {
    color: "#e6cfbf",
    fontSize: 24,
    fontWeight: "bold",
  },
  drawerImage: {
    margin: 10,
    height: 60,
    width: 60,
  },
  stackIcon: {
    marginLeft: 10,
    color: "#e6cfbf",
    fontSize: 24,
  },
});

export default Main;
