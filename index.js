// 連接數據庫
const connection = new MySQLConnection({
    host: 'rm-bp1b191062h53s0n0po.mysql.rds.aliyuncs.com',
    user: 'dennis',
    password: 'aA28450764#',
    database: 'testdb',
  });
  
  // 查詢數據
  connection.query('SELECT * FROM test1', (err, results) => {
    if (err) {
      console.error(err);
      return;
    }
  
    // 顯示數據
    const table = document.querySelector('table');
    results.forEach((row) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${row.name}</td>
      `;
      table.appendChild(tr);
    });
  });
  
  // 關閉連接
  connection.end();
