const mongoose = require('mongoose');

// 数据库连接
mongoose.connect('mongodb://localhost:27017/alibaixiu',  { useNewUrlParser: true, useCreateIndex: true})
  .then(() => console.log('数据库连接成功'))
  .catch(() => console.log('数据库连接失败'))

