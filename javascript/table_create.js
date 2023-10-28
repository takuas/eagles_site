// 表の項目を作成する関数
function createTableHeader(table, headerLabels) {
  const headerRow = document.createElement('tr');

  // 表の項目データを挿入
  headerLabels.forEach((labelText, index) => {
    const headerCell = document.createElement('td');
    // 特定のセルにクラスとセルのサイズを指定する（コード番号62）
    cellClassGrant(headerCell,index)

    headerCell.textContent = labelText;
    headerRow.appendChild(headerCell);
  });

  // 表に挿入する
  table.appendChild(headerRow);

  return table;
}

// 表のデータを作成する関数
function createTableCell(table, data) {
  // 表のデータを作成
  data.forEach(rowData => {
    const row = document.createElement('tr');
    let rakuten = false;
  
    // セルにデータと設定を挿入
    rowData.forEach((cellData, cellIndex) => {
      const cell = document.createElement('th');
      cell.textContent = cellData;
      
      // 特定のセルにクラスとセルのサイズを指定する（コード番号62）
      cellClassGrant(cell, cellIndex)
      
      // 特定の行だけ背景を変更する為の条件式
      if (cellIndex === 1 && cellData === '楽天イーグルス') {
        rakuten = true;
      }

      cell.classList.add('data_cell'); // セルにクラスを追加

      row.appendChild(cell);
    });
  
    // セルの要素を取得
    const dataCell = row.getElementsByClassName('data_cell');

    // 特定の行だけ背景の色を変化させる
    if (rakuten) {
      for (let i = 0; i < dataCell.length; i++) {
        dataCell[i].classList.add('cell_rakuten_color'); // 新しいクラスを追加
      }
    }
  
    // 表に挿入する
    table.appendChild(row);
  });
}

// インデックス[2]までクラスを付与し、特定のセルのサイズを指定する関数
function cellClassGrant(cellContent,cellIndex) {

  // インデックス[2]までそれぞれクラスを付与する
  const classNames = ['cell_top', 'cell_center', 'cell_right'];
  if (cellIndex < classNames.length) {
    cellContent.classList.add(classNames[cellIndex]);
  }

  // インデックス[0]から[2~12]のセルサイズ指定
  if (cellIndex === 0 || (cellIndex >= 2 && cellIndex <= 12)) {
    cellContent.style.width = '60px';
  }
  
  return cellContent;
}


// 表を作成する関数
function createTable(data, headerLabels) {
  // 表の作成
  const table = document.createElement('table');

  // 表の項目を作成（コード番号2）
  createTableHeader(table, headerLabels);
  
  // 表のデータを作成（コード番号22）
  createTableCell(table, data)

  return table;
}

// 表を挿入する要素を取得して挿入する関数
function appendTableToContainer(table, containerId) {
  const tableContainer = document.getElementById(containerId);
  tableContainer.appendChild(table);
}
