import React, {useEffect} from "react";
import OneCell from "./OneCell";
import {View, StyleSheet } from "react-native"
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { render } from "react-dom";

let matrix = [
  [false, false,false,false, false],
  [false, false,false,false, false],
  [false, false,false,false, false],
  [false, false,false,false, false],
  [false, false,false,false, false],
]

const Board = () => {

  const renderBoard =  []
  const createBoard = () => {
    for(let i=0; i < matrix.length; i++) {
      for(let j=0; j<matrix[i].length; j++) {
        renderBoard.push(<OneCell key={uuidv4()} id={uuidv4()} matrix={matrix} i={i} j={j}/>)
      }
    }
  }
    createBoard()
  
    
  return <View style={styles.rows}>{renderBoard}</View>;
};

let styles = StyleSheet.create({
  rows: {
    flexDirection: "row",
    flexWrap: "wrap",    
  },
});
export default Board;
