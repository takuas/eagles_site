// 新しいテーブル要素を作成
const table = document.createElement('table');

// テーブルのヘッダー行を作成
const headerRow = document.createElement('tr');
const headerLabels = ["順位", "球団", "試合", "勝", "敗", "分", "勝率", "差", "得点", "失点", "本塁打", "打率", "防御率"];

// ヘッダーセルを作成
headerLabels.forEach(labelText => {
  const headerCell = document.createElement('td');
  headerCell.textContent = labelText;
  headerRow.appendChild(headerCell);
});

// ヘッダー行をテーブルに追加
table.appendChild(headerRow);

// データ行を作成
const dataRow = document.createElement('tr');
const data = [
  ["１", "オリックス", "143", "86", "53", "4", ".619", "-", "508", "428", "109", ".250", "2.73"],
  ["２","千葉ロッテ","143","70","68","3",".507","15.5","505","524","100",".239","3.40"],
  ["３","ソフトバンク","143","71","69","3",".507","15.5","536","507","104",".248","3.27"],
  ["４","楽天イーグルス","143","70","71","2",".496","17","513","556","104",".244","3,52"],
  ["５","西武ライオンズ","143","65","77","1",".458","22.5","435","465","90",".233","2.93"],
  ["６","日本ハム","143","60","82","1",".423","27.5","464","496","100",".231","3.08"]
];

// データセルを作成
data.forEach(rowData => {
  const row = document.createElement('tr');
  rowData.forEach((cellData, cellIndex) => {
    const cell = document.createElement('th');
    cell.textContent = cellData;
    if (cellIndex === 1 && cellData === "楽天イーグルス") {
      row.classList.add('cell_background_color');
    }
    if (cellIndex >= 2 && cellIndex <= 12 ) {
      cell.style.width = "60px"
    }
    row.appendChild(cell);
  });
  table.appendChild(row);
});

// データ行をテーブルに追加
table.appendChild(dataRow);

// テーブルを文書内の適切な要素に追加
const tableContainer = document.getElementById('team_ranking');
tableContainer.appendChild(table);