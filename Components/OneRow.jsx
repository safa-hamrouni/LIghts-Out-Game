import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import OneCell from "./OneCell";

const OneRow = ({ item, matrixIndex }) => {
  const allSquares = [];
  for (let i = 0; i < item.length; i++) {
    allSquares.push(
      <OneCell id={uuidv4()} item={item} i={i} matrixIndex={matrixIndex} />
    );
  }

  return (
    <>
      <View style={styles.rows}>{allSquares}</View>
    </>
  );
};

let styles = StyleSheet.create({
  rows: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default OneRow;
