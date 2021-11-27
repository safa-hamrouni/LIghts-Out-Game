import React from "react";
import { View, StyleSheet } from "react-native";

// const matrix = [
//   [0,1,1,1,0],
//   [1,0,1,0,1],
//   [1,1,0,1,1],
//   [1,0,1,0,1],
//   [0,1,1,1,0]
// ]

export default OneRow = () => {
  return (
    <>
      <View style={styles.rows}>
        <View style={styles.square}></View>
        <View style={styles.square}></View>
        <View style={styles.square}></View>
        <View style={styles.square}></View>
        <View style={styles.square}></View>
      </View>
      <View style={styles.rows}>
        <View style={styles.square}></View>
        <View style={styles.square}></View>
        <View style={styles.square}></View>
        <View style={styles.square}></View>
        <View style={styles.square}></View>
      </View>
      <View style={styles.rows}>
        <View style={styles.square}></View>
        <View style={styles.square}></View>
        <View style={styles.square}></View>
        <View style={styles.square}></View>
        <View style={styles.square}></View>
      </View>
      <View style={styles.rows}>
        <View style={styles.square}></View>
        <View style={styles.square}></View>
        <View style={styles.square}></View>
        <View style={styles.square}></View>
        <View style={styles.square}></View>
      </View>
      <View style={styles.rows}>
        <View style={styles.square}></View>
        <View style={styles.square}></View>
        <View style={styles.square}></View>
        <View style={styles.square}></View>
        <View style={styles.square}></View>
      </View>
    </>
  );
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
