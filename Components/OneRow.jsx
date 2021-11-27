import React from "react";
import { Text, View, StyleSheet } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const handlePress = () => {};

const OneRow = ({ item }) => {
  const allCol = item.map((element) => (
    <View style={styles.square} key={uuidv4()}>
      <Text>{element}</Text>
    </View>
  ));
  return <View style={styles.rows}>{allCol}</View>;
};

let styles = StyleSheet.create({
  rows: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  square: {
    backgroundColor: "#454B1B",
    width: 70,
    height: 70,
    margin: 2,
    borderRadius: 10,
  },
});

export default OneRow;
