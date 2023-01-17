function ResetClick() {
  document.getElementById('text_value').value = "";
}


function getCSV(){
  var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRequestオブジェクトを生成
  req.open("get", "sample.csv", true); // アクセスするファイルを指定
  req.send(null); // HTTPリクエストの発行

  // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ
  req.onload = function(){
    convertCSVtoArray(req.responseText); // 渡されるのは読み込んだCSVデータ
  }
}

// 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
function convertCSVtoArray(str){ // 読み込んだCSVデータが文字列として渡される
  var result = []; // 最終的な二次元配列を入れるための配列
  var tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成

  // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
  for(var i=0;i<tmp.length;++i){
      result[i] = tmp[i].split(',');
  }

  alert(result[0][0]); // 300yen
  let text_val = document.getElementById('text_value').value;
  for (var i=1; i<=tmp.length; ++i) {
    if (text_val == result[0][i]){
      document.getElementById('val').textContent = result[1][i];
      return;
    }
  }
  document.getElementById('val').textContent = '圏外';
  return;
}