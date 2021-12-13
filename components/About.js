import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class About extends Component {
  render() {
    const valeur = "50";
    return (
      <View>
        <Text>A propos de Super Felin</Text>
        <Text>Lorem ipsum dolores:{valeur}</Text>
        <Image
          style={styles.stretch}
          source={require("./../img/wolvy.png")}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  stretch: {
    width: "100%",
    height: undefined,
    aspectRatio: 1
  }
});