import React from "react";
import OneRow from "./OneRow";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const matrix = [
  [0, 1, 1, 1, 0],
  [1, 0, 1, 0, 1],
  [1, 1, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 1, 1, 1, 0],
];

const AllRows = () => {
  const renderRows = matrix.map((item, index) => (
    <OneRow matrixIndex={index} item={item} key={uuidv4()} />
  ));
  return <>{renderRows}</>;
};

export default AllRows;
