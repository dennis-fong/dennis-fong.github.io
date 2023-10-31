// 連接數據庫
const connection = new MySQLConnection({
    host: 'rm-bp1b191062h53s0n0po.mysql.rds.aliyuncs.com',
    user: 'dennis',
    password: 'aA28450764#',
    database: 'testdb',
    post:'3306'
  });
  
// 連接成功後執行的回調函數
connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    // 連接成功
    console.log("連接成功");

  }
});
