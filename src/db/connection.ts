import sql from 'mssql';

const connection = sql.connect({
  server: 'DESKTOP-KP1GG9R',
  user: 'sa',
  password: 's0l1dsnake',
  database: 'newtaskformDB',
  trustServerCertificate: true
});

export default connection;

// Server=localhost\SQLEXPRESS;Database=master;Trusted_Connection=True;
