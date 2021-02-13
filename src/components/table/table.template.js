const codes = {
  A: 65,
  Z: 90,
};

// function toCell(row, col) {
//   return `
//     <div class="cell" contenteditable  data-col = ${col}></div>
//   `;
// }

function toCell(row) {
  return function(_, col) {
    return `
     <div class="cell"
     contenteditable
     data-col="${col}"
     data-type="cell"
     data-id="${row}:${col}"
     ></div>
   `;
  };
}

function createCol(col, index) {
  return `
    <div class="column" data-type = "resizable" data-col = ${index}>
        ${col}
        <div class="col-resize" data-resize = "col"></div>
    </div>
  `;
}

function createRow(index, content) {
  const resizer = index ?
      '<div class="row-resize" data-resize = "row">' + '</div>' : '';
  return `
  <div class = "row" data-type = "resizable">
    <div class="row-info">
        ${index ? index : ''}
        ${resizer}
    </div>
    <div class="row-data">${content}</div>
    </div>
  `;
}

function toChar(_, index) {
  return String.fromCharCode(codes.A + index);
}

export function createTable(rowsCount = 15) {
  const colsCount = codes.Z - codes.A + 1;
  const rows = [];

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(createCol)
      .join('');

  rows.push(createRow(null, cols));

  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell(row))
        .join('');
    rows.push(createRow(row + 1, cells));
  }

  return rows.join('');
}
