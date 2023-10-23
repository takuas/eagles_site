// 表のデータを作成する関数
function createTableCell(cellData, cellIndex) {
  const cell = document.createElement('th');
  cell.textContent = cellData;

  // 特定の項目だけセルサイズ変更
  if (cellIndex === 0) {
    cell.style.width = '60px';
  }  else if (cellIndex >= 2 && cellIndex <= 12) {
    cell.style.width = '60px';
  }
  return cell;
}

// 表の項目を作成する関数
function createTableHeader(headerLabels) {
  const headerRow = document.createElement('tr');
  headerLabels.forEach(labelText => {
    const headerCell = document.createElement('td');
    headerCell.textContent = labelText;
    headerRow.appendChild(headerCell);
  });
  return headerRow;
}

// 表を作成する関数
function createTable(data, headerLabels) {
  // 表の作成
  const table = document.createElement('table');

  // 表の項目を作成
  const headerRow = createTableHeader(headerLabels);
  
  // 表に挿入する
  table.appendChild(headerRow);
  
  // 表のデータを作成
  data.forEach(rowData => {
    const row = document.createElement('tr');
    let rakuten = false;

    rowData.forEach((cellData, cellIndex) => {
      const cell = createTableCell(cellData, cellIndex);
      // 特定の行だけ背景を変更する為の条件式
      if (cellIndex === 1 && cellData === '楽天イーグルス') {
        rakuten = true;
      }
      row.appendChild(cell);
    });

    // 特定の行にクラスを追加し、背景を変更
    if (rakuten) {
      row.classList.add('cell_background_color');
    }

    // 表に挿入する
    table.appendChild(row);
  });

  return table;
}

// 表を挿入する要素を取得して挿入する関数
function appendTableToContainer(table, containerId) {
  const tableContainer = document.getElementById(containerId);
  tableContainer.appendChild(table);
}
