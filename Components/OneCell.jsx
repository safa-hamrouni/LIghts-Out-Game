import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { v4 as uuidv4 } from "uuid";

const OneCell = ({ i, item, id, matrixIndex }) => {
  const [state, setState] = useState(true);
  const handlePress = (el, i, j) => {
    console.log(el[j - 1], el[i], i, j);
    if (
      el[i + 1] === 1 ||
      el[i - 1] === 1 ||
      el[j - 1] === 1 ||
      el[j + 1] === 1
    )
      setState((prevState) => !prevState);
  };
  return (
    <TouchableOpacity
      style={state ? styles.squareDark : styles.squareLit}
      key={uuidv4()}
      onPress={() => handlePress(item, i, matrixIndex)}
    >
      <View>
        <Text>{item[i]}</Text>
      </View>
    </TouchableOpacity>
  );
};

let styles = StyleSheet.create({
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

export default OneCell;
