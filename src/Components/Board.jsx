import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
// import OneCell from "./OneCell"

let matrice = [
  [false, true, false, false, false],
  [false, false, true, false, true],
  [true, false, false, true, false],
  [false, true, false, false, false],
  [false, true, true, false, false],
];

const Board = () => {
  const renderBoard = [];
  let matrix = [];
  const level1 = 20;
  const level2 = 15;
  const level3 = 10;
  const [boardState, setBoardState] = useState(matrice);
  const [youWon, setYouWon] = useState(false);
  const [youLost, setYouLost] = useState(false);
  const [finish, setFinish] = useState(false);
  let [clicksToLose, setClicksToLose] = useState(level1);
  let [level, setLevel] = useState(1);

  useEffect(() => {
    handleLooser(clicksToLose);
    handleWinner(boardState);
  }, [clicksToLose, boardState]);

  let createMatrix = () => {
    for (let i = 0; i < 5; i++) {
      let cols = [];
      for (let j = 0; j < 5; j++) {
        cols.push(Math.random() < 0.3);
      }
      matrix.push(cols);
    }
  };

  const createBoard = ((arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        renderBoard.push(
          <TouchableOpacity
            key={uuidv4()}
            style={arr[i][j] ? styles.squareLit : styles.squareDark}
            onPress={() => handleCellPress(i, j)}
          ></TouchableOpacity>
          //<OneCell key={uuidv4()} id={uuidv4()} matrix={matrix} i={i} j={j}/>
        );
      }
    }
  })(boardState);

  const handlePress = (i, j) => {
    if (i >= 0 && i < 5 && j >= 0 && j < 5)
      boardState[i][j] = !boardState[i][j];
  };

  const handleCellPress = (i, j) => {
    handlePress(i, j);
    // handlePress(i + 1, j);
    // handlePress(i - 1, j);
    // handlePress(i, j - 1);
    // handlePress(i, j + 1);
    setClicksToLose((prevState) => prevState - 1);
  };

  const handleWinner = (matrix) => {
    if (level > 3) setFinish((prevState) => !prevState);
    let winnerArr = [];
    matrix.forEach((el) => {
      el.forEach((elem) => {
        if (elem) winnerArr.push(elem);
      });
    });
    if (!winnerArr.length) setYouWon((prevState) => !prevState);
  };

  const handleLooser = (clicks) => {
    if (!clicks) {
      setYouLost((prevState) => !prevState);
    }
  };

  const handleReset = () => {
    createMatrix();
    if (matrix.length) setBoardState(matrix);
    if (youLost) setYouLost(false);
    if (youWon) setYouWon(false);
    setClicksToLose(level1);
    setLevel(1);
    setFinish(false);
  };

  const handleLevel = () => {
    // createMatrix();
    // if (matrix.length) setBoardState(matrix);
    if (level === 1) {
      setClicksToLose(level2);
      setLevel((prevState) => prevState + 1);
    }
    if (level === 2) {
      setClicksToLose(level3);
      setLevel((prevState) => prevState + 1);
    }
    if (level === 3) {
      setFinish(true);
      setYouWon(false);
    }
  };

  return (
    <>
      {youWon ? (
        <Text style={styles.text}>You Won !! </Text>
      ) : youLost ? (
        <Text style={styles.text}>You Lost !!!! </Text>
      ) : finish ? (
        <Text style={styles.text}>All done ! </Text>
      ) : (
        <>
          <Text style={styles.levelText}>Level: {level}</Text>
          <Text style={styles.text}>
            You have {clicksToLose} clicks left !{" "}
          </Text>
          <View style={styles.rows}>{renderBoard}</View>
        </>
      )}
      <View style={styles.buttons}>
        <Button style={styles.btn} onPress={handleReset} title="Reset" />
        <Button style={styles.btn} onPress={handleLevel} title="Continue" />
      </View>
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
  text: {
    fontSize: 24,
  },
  levelText: {
    fontSize: 16,
  },
  buttons: {
    marginTop: "5%",
  },
});
export default Board;
