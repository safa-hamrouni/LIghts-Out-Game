import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { v4 as uuidv4 } from "uuid";

const OneCell = ({ i, item, matrixIndex }) => {
  const [state, setState] = useState(false);
  const handlePress = () => {
    setState((prevState) => !prevState);
  };
  return (
    <TouchableOpacity
      style={state ? styles.squareLit : styles.squareDark}
      key={uuidv4()}
      onPress={() => handlePress()}
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
