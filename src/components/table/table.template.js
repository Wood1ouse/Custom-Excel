const codes = {
  A: 65,
  Z: 90,
};

function toCell() {
  return `
    <div class="cell" contenteditable></div>
  `;
}

function createCol(col) {
  return `
    <div class="column">${col}</div>
  `;
}

function createRow(index, content) {
  return `
  <div class = "row">
    <div class="row-info">${index ? index : ''}</div>
    <div class="row-data">${content}</div>
    </div>
  `;
}

function toColumn(_, index) {
  return String.fromCharCode(codes.A + index);
}

export function createTable(rowsCount = 15) {
  const colsCount = codes.Z - codes.A + 1;
  const rows = [];

  const cols = new Array(colsCount)
      .fill('')
      .map(toColumn)
      .map(createCol)
      .join('');
  console.log(cols);

  rows.push(createRow(null, cols));

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('');
    rows.push(createRow(i + 1, cells));
  }

  return rows.join('');
}
