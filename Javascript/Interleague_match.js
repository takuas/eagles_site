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

const dataRow = document.createElement('tr');


const tableContainer = document.getElementById('Interleague_match');
tableContainer.appendChild(table);
