# Instructions

## The Game

- You win _Lights Out_ when all the lights are out.
- Clicking the cell will turn off a light.
  - Although it will toggle all the other lights around it. Up, down, left and right.

## Plan

- Create three components:

  - App that renders `<Board/>`
  - `<Board/>` Which will can the state oft he board
  - `<Cell/>` Which will render a `<div>` where the css classes indicate whether this cell is lit or unlit. It will call a function passed from board, which will update state.

- When the game is won, the board will be replaced with a simple "You Won" message.
