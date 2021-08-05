javascript: (function () {
  'use strict';

  const table = document.getElementById('dgSeisekiList').getElementsByTagName('tbody')[0].getElementsByTagName('tr');
  console.log(table);
  let cnt = 0;
  let GP = 0;
  const RATINGS = ['不可', '可', '良', '優', '秀'];
  for (let i = 0; i < table.length; i++) {
    let seiseki = table[i].getElementsByTagName('td');
    if (seiseki.length < 8) continue;
    let credits = Number(seiseki[6].innerHTML);
    let rating = seiseki[7].innerHTML;
    for (let j = 0; j <= 4; j++) {
      if (rating == RATINGS[j]) {
        cnt += credits;
        GP += credits * j;
        break;
      }
    }
  }
  if (cnt == 0) alert('報告済の成績がありません。');
  else alert('GPAは ' + (GP / cnt).toFixed(3) + ' です。');
})();
