import React from "react";
import Board from "./Board";
import { render } from "@testing-library/react";
const [mockBoard, setMockBoard] = React.useState();

jest.mock("./Board.js", () => {
  const initialBoardState = [
    [true, false, true, true],
    [true, true, false, true],
    [true, true, false, true],
    [false, false, false, true],
  ];
  React.useState = jest.fn().mockReturnValue(initialBoardState);
  render(<Board />);
});
