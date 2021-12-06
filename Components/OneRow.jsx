import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import OneCell from "./OneCell";

const OneRow = ({ item, matrixIndex }) => {
  const [state, setState] = useState(false);
  const handlePress = () => {
    setState((prevState) => !prevState);
  };
  const allSquares = [];
  for (let i = 0; i < item.length; i++) {
    allSquares.push(
      <TouchableOpacity
        style={state ? styles.squareLit : styles.squareDark}
        key={uuidv4()}
        onPress={() => handlePress()}
      >
        <View>
          <Text>{item[i]}</Text>
        </View>
      </TouchableOpacity>
      /*<OneCell item={item} i={i} matrixIndex={matrixIndex} />*/
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
  squareDark: {
    backgroundColor: "#454B1B",
    width: 70,
    height: 70,
    margin: 2,
    borderRadius: 10,
  },
  squareLit: {
    backgroundColor: "#32cd32",
    width: 70,
    height: 70,
    margin: 2,
    borderRadius: 10,
  },
});

export default OneRow;
