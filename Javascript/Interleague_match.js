const Interleague_table = document.createElement('table');

// テーブルのヘッダー行を作成
const Interleague_headerRow = document.createElement('tr');
const Interleague_headerLabels = ["順位", "球団", "試合", "勝", "敗", "分", "勝率", "差", "得点", "失点", "本塁打", "打率", "防御率"];

// ヘッダーセルを作成
Interleague_headerLabels.forEach(labelText => {
  const headerCell = document.createElement('td');
  headerCell.textContent = labelText;
  Interleague_headerRow.appendChild(headerCell);
});

// ヘッダー行をテーブルに追加
Interleague_table.appendChild(Interleague_headerRow);

// データ行を作成
const Interleague_dataRow = document.createElement('tr');
const Interleague_data = [
  ["1","横浜DeNA",          "18", "11", "7", "0", ".611", "-",  "80", "59", "8",  ".258", "2.93" ],
  ["2","福岡ソフトバンク",    "18", "11", "7", "0", ".611", "0",  "86", "65", "16", ".266", "3.30" ],
  ["3","巨人",              "18", "11", "7", "0", ".611", "0",  "72", "55", "25", ".274", "3.00" ],
  ["4","オリックス",         "18", "11", "7", "0", ".611", "0",  "66", "56", "15", ".232", "2.75" ],
  ["5","北海道日本ハム",      "18", "10", "8", "0", ".556", "1",  "59", "45", "19", ".238", "2.24" ],
  ["6","楽天イーグルス",      "18", "9",  "9", "0", ".500", "2",  "65", "89", "14", ".260", "4.29" ],
  ["7","広島",              "18", "9",  "9", "0", ".500", "2",  "61", "76", "7",  ".238", "3.87" ],
  ["8","千葉ロッテ",         "18", "7",  "9", "2", ".438", "3",  "55", "77", "13", ".215", "4.08" ],
  ["9","中日",              "18", "7",  "10","1", ".412", "3.5","54", "58", "10", ".232", "2.81" ],
  ["10","阪神",             "18", "7",  "10","1", ".412", "3.5","58", "66", "5",  ".210", "3.23" ],
  ["11","東京ヤクルト",      "18", "7",  "11","0", ".389", "4",  "69", "65", "13", ".251", "3.53" ],
  ["12","埼玉西武ライオンズ", "18", "6",  "12","0", ".333", "5",  "48", "62", "11", ".212", "3.17" ]
]

// データセルを作成
Interleague_data.forEach(rowData => {
  const row = document.createElement('tr');
  rowData.forEach((cellData, cellIndex) => {
    const cell = document.createElement('th');
    cell.textContent = cellData;
    if (cellIndex === 0) {
      cell.style.width = "60px";
    } else if (cellIndex === 1 && cellData === "楽天イーグルス") {
      row.classList.add('cell_background_color');
    } else if (cellIndex >= 2 && cellIndex <= 12 ) {
      cell.style.width = "60px"
    }
    
    row.appendChild(cell);
  });
  Interleague_table.appendChild(row);
});

// データ行をテーブルに追加
Interleague_table.appendChild(Interleague_dataRow);

// テーブルを文書内の適切な要素に追加
const Interleague_tableContainer = document.getElementById('Interleague_match');
Interleague_tableContainer.appendChild(Interleague_table);
