import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
// import OneCell from "./OneCell"

let matrix = [
  [false, true, false, false, false],
  [false, false, false, true, false],
  [false, true, false, false, false],
  [false, false, false, false, true],
  [true, false, false, false, false],
];

const Board = () => {
  const [boardState, setBoardState] = useState(false);
  const [youWon, setYouWon] = useState(false);
  let [clickCount, setClickCount] = useState(0);


  const handlePress = (i, j) => {
    if (i >= 0 && i < 5 && j >= 0 && j < 5) matrix[i][j] = !matrix[i][j];
    setBoardState((prevState) => !prevState);
  };
  const handleCellPress = (i, j) => {
    handlePress(i, j);
    handlePress(i + 1, j);
    handlePress(i - 1, j);
    handlePress(i, j - 1);
    handlePress(i, j + 1);
    setClickCount((prevState) => prevState + 1);
  };
  const handleWinner = () => {
    setYouWon((prevState) => !prevState);
  };
  const randomLitCells = () => {
    console.log("random");
  };

  const handleReset = () => {
    setClickCount(0);
    randomLitCells();
  };

  const renderBoard = [];
  const createBoard = () => {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        renderBoard.push(
          <TouchableOpacity
            key={uuidv4()}
            style={matrix[i][j] ? styles.squareLit : styles.squareDark}
            onPress={() => handleCellPress(i, j)}
          ></TouchableOpacity>
          //<OneCell key={uuidv4()} id={uuidv4()} matrix={matrix} i={i} j={j}/>
        );
      }
    }
  };
  createBoard();
  
  return (
    <>
      <Text>Count: {clickCount}</Text>
      {!youWon ? (
        <View style={styles.rows}>{renderBoard}</View>
      ) : (
        <Text>You Won !! </Text>
      )}
      <Button onPress={handleReset} title="Reset" />
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
    width: "18%",
    height: 76,
    margin: 2,
    borderRadius: 10,
  },
  squareLit: {
    backgroundColor: "#32cd32",
    width: "18%",
    height: 76,
    margin: 2,
    borderRadius: 10,
  },
});
export default Board;
