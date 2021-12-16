import React, { useState } from 'react'
import {
  COLORS,
  rowNumber,
  columnNumber,
  getBoxInitialState,
} from './App.constants';
import './App.css';


function App() {

  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [boxColors, setBoxColors] = useState(getBoxInitialState());

  const boxClickHandler = (row, column) => {
    const newBoxColors = [...boxColors];
    newBoxColors[row][column] = selectedColor;
    setBoxColors(newBoxColors);
  }

  const resetHandler = () => {
    setBoxColors(getBoxInitialState());
  }

  return (
    <div className="App">
      <div className="canvas-wrapper">
        <div className="canvas-board">
          {
            boxColors.map((currentRow, rowIndex) => {
                return (
                  <div className="row">
                    {
                      currentRow.map((box, columnIndex) => (
                        <span
                          key={`${rowIndex}-${columnIndex}`}
                          className={`box ${rowIndex + 1 === rowNumber ? 'lastRowStyles' : ''}`}
                          style={{
                            backgroundColor: boxColors[rowIndex][columnIndex]
                          }}
                          onClick={() => boxClickHandler(rowIndex, columnIndex)}
                        />
                      ))
                    }
                  </div>
                )
            })
          }
          <div className="row drawing-row">
            {
              Array(columnNumber).fill().map((box, index) => {

                const boxColor = COLORS[index % COLORS.length]
                const selectedColorIndex = COLORS.findIndex((color) => color === selectedColor)
                
                return (
                  <span
                    key={index}
                    className={`box drawing-box ${index === selectedColorIndex ? 'selectedBox' : ''}`}
                    style={{ backgroundColor: boxColor }}
                    onClick={() => setSelectedColor(boxColor)}
                  />
                )
              })
            }
          </div>
        </div>
        <div className='reset-button' onClick={resetHandler}>
          RESET
        </div>
      </div>
    </div>
  );
}

export default App;
