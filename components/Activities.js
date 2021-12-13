import React, { Component } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

const DATA = [
  { id: "1", title: "Dormir" },
  { id: "2", title: "Manger" },
  { id: "3", title: "Se faire caliner" }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default class Activities extends Component {
  render() {
    const renderItem = ({ item }) => <Item title={item.title} />;

    console.log("data", DATA);
    return (
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  }
});