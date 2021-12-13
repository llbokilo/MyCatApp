import React, { Component } from "react";
import { StatusBar, StyleSheet, SafeAreaView } from "react-native";
import About from "./components/About";
import Home from "./components/Home";
import Activities from "./components/Activities";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={false} />
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="laZomePage" component={Home} />
            <Tab.Screen name="Activités" component={Activities} />
            <Tab.Screen name="A Propos" component={About} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 25,
    fontWeight: "500"
  }
});
