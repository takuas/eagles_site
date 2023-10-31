// 投手成績表の項目
const headerPitcherRecord = [ "背番号",	"選手名",	"勝数",	"敗数",	"試合数",	"防御率",	"完投数",	"無得勝",	"無四球試合",	"ホールド",	"HP",	"セーブ",	"勝率",	"投球回",	"被安打",	"被本塁打",	"奪三振",	"与四球",	"与死球",	"暴投",	"ボーク",	"失点",	"自責点", ];

// 投手成績表２ページ目
const pitcherRecordDataSecond = [
  [ "22",	  "小孫 竜二",     "0",	"0",	"4",	"9",    "0",	"0",	"0",	"0",	"0",	"0",	"0",	"4",     "4",  "0",	"3",	"6",	"0",	"1",	"0",	"4",	"4"],
  [ "29",	  "高田 孝一",     "0",	"0",	"7",	"1.86",	"0",	"0",	"0",	"0",	"0",	"0",	"0",	"9.7",   "14", "0",	"6",	"2",	"0",	"2",	"0",	"4",	"2"],
  [ "38",	  "弓削 隼人",     "0",	"0",	"12",	"5.59",	"0",	"0",	"0",	"0",	"0",	"0",	"0",	"9.7",   "12", "1",	"5",	"4",	"2",	"0",	"0",	"7",	"6"],
  [ "49",	  "西垣 雅矢",     "0",	"0",	"1",	"81",   "0",	"0",	"0",	"0",	"0",	"0",	"0",	"0 1/3", "1",  "0",	"0",	"1",	"1",	"0",	"0",	"3",	"3"],
  [ "52",	  "津留崎 大成",	 "0",	"0",	"7",	"1.86",	"0",	"0",	"0",	"0",	"0",	"0",	"0",	"9.7",	"11",	 "1",	"7",	"0",	"0",	"0",	"0",	"2",	"2"],
  [ "60",	  "石橋 良太",    "0",	"0",	"2",	"18.9",	"0",	"0",	"0",	"0",	"0",	"0",	"0",	"3.3",	"8",   "1",	"2",	"1",	"0",	"0",	"0",	"7",	"7"],
  [ "62",	  "西口 直人",    "0",	"4",	"26",	"4.56",	"0",	"0",	"0",	"7",	"7",	"0",	"0",	"23.7",	"32",  "4",	"18",	"9",	"0",	"1",	"0",	"14",	"12"],
  [ "72",	  "宮森 智志",    "0",	"2",	"24",	"7.71",	"0",	"0",	"0",	"3",	"3",	"0",	"0",	"21",   "30",  "2",	"15",	"14",	"0",	"1",	"0",	"18",	"18"],
  [ "40",	  "内間 拓馬",    "-",	"-",	"-",	"-",    "-",	"-",	"-",	"-",	"-",	"-",	"-",	"-",    "-",   "-",	"-",	"-",	"-",	"-",	"-",	"-",	"-"],
  [ "53",	  "高田 萌生",    "-",	"-",	"-",	"-",    "-",	"-",	"-",	"-",	"-",	"-",	"-",	"-",    "-",   "-",	"-",	"-",	"-",	"-",	"-",	"-",	"-"],
  [ "59",	  "泰 勝利",      "-",	"-",	"-",	"-",   "-",   "-",	"-",	"-",	"-",	"-",	"-",	"-",    "-",   "-",	"-",	"-",	"-",	"-",	"-",	"-",	"-"],
  [ "64",	  "林 優樹",      "-",	"-",	"-",	"-",   "-",   "-",	"-",	"-",	"-",	"-",	"-",	"-",    "-",   "-",	"-",	"-",	"-",	"-",	"-",	"-",	"-"],
  [ "68",	  "小峯 新陸",    "-",	"-",	"-",	"-",    "-",	"-",	"-",	"-",	"-",	"-",	"-",	"-",    "-",   "-",	"-",	"-",	"-",	"-",	"-",	"-",	"-"],
  [ "71",	  "吉川 雄大",    "-",	"-",	"-",	"-",    "-",	"-",	"-",	"-",	"-",	"-",	"-",	"-",    "-",   "-",	"-",	"-",	"-",	"-",	"-",	"-",	"-"],
  [ "001",	"佐藤 智輝",    "-",	"-",	"-",	"-",    "-",	"-",	"-",	"-",	"-",	"-",	"-",	"-",    "-",   "-",	"-",	"-",	"-",	"-",	"-",	"-",	"-"],
  [ "004",	"引地 秀一郎",	"-",	"-",	"-",	"-",    "-",	"-",	"-",	"-",	"-",	"-",	"-",	"-",    "-",   "-",	"-",	"-",	"-",	"-",	"-",	"-",	"-"],
  [ "007",	"福森 耀真",    "-",	"-",	"-",	"-",    "-",	"-",	"-",	"-",	"-",	"-",	"-",	"-",    "-",  "-",	"-",	"-",	"-",	"-",	"-",	"-",	"-"],
  [ "017",	"王 彦程",     "-",   "-",	"-",	"-",   "-",   "-",	"-",	"-",	"-",	"-",	"-",	"-",    "-",  "-",	"-",	"-",	"-",	"-",	"-",	"-",	"-"],
  [ "130",	"古賀 康誠",   "-",   "-",	"-",	"-",    "-",	"-",	"-",	"-",	"-",	"-",	"-",	"-",    "-",  "-",	"-",	"-",	"-",	"-",	"-",	"-",	"-"],
  [ "135",	"清宮 虎多朗",	"-",	"-",	"-",	"-",    "-",	"-",	"-",	"-",	"-",	"-",	"-",	"-",    "-",   "-",	"-",	"-",	"-",	"-",	"-",	"-",	"-"],
  [ "155",	"竹下 瑛広",   "-",   "-",	"-",	"-",    "-",	"-",	"-",	"-",	"-",	"-",	"-",	"-",    "-",   "-",	"-",	"-",	"-",	"-",	"-",	"-",	"-"]
];

// 表を作成して挿入する関数呼び出し
document.addEventListener("DOMContentLoaded", function() {
  // 投手成績表を作成
  const pitcherRecordSecondTable = createTable(pitcherRecordDataSecond,  headerPitcherRecord);

  // 作成した表を挿入する要素を取得する関数呼び出し
  appendTableToContainer(pitcherRecordSecondTable, 'pitcher_second_score');
})
