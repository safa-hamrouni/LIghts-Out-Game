import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


const OneCell = ({ matrix, i, j }) => {
  const [state, setState] = useState(matrix[i][j]);
  const handlePress = (i, j) => {
    if (i >= 0 && i < matrix.length && j >= 0 && j < matrix[i].length)
      matrix[i][j] = !matrix[i][j];

  };
  const handleCellPress = (i, j) => {
    handlePress(i, j);
    handlePress(i + 1, j);
    handlePress(i - 1, j);
    handlePress(i, j - 1);
    handlePress(i, j + 1);
    console.log(matrix);
  };
  return (
    <TouchableOpacity
      style={matrix[i][j] ? styles.squareLit : styles.squareDark}
      onPress={() => handleCellPress(i, j)}
    >
      <View></View>
    </TouchableOpacity>
  );
};

let styles = StyleSheet.create({
  squareDark: {
    backgroundColor: "#454B1B",
    width: 76,
    height: 76,
    margin: 2,
    borderRadius: 10,
  },
  squareLit: {
    backgroundColor: "#32cd32",
    width: 76,
    height: 76,
    margin: 2,
    borderRadius: 10,
  },
});

export default OneCell;
