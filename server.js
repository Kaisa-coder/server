const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
app.listen(80, () => {
  console.log('服务已启动!')
})
const list = []
for (let i = 1; i < 30; i++) {
  i = i < 10 ? `0${i}` : i
  list.push(
    {
      date: `2023-06-${i}`,
      name: i,
      address: i,
    }
  )
}

app.get('/tableInfo', (req, res) => {
  res.end(JSON.stringify({
    code: 200,
    data: {
      list,
      total: list.length
    },
    msg: 'success',
    success: true
  }))
})

app.get('/getStudentInfo', (req, res) => {
  res.end(JSON.stringify({
    code: 200,
    data: {
      list: [
        {
          date: '2002-02-11',
          name: "zs",
          address: "广州",
        },
        {
          date: "2001-01-10",
          name: "ls",
          address: "深圳",
        }
      ],
      total: 1
    },
    msg: 'success',
    success: true
  }))
})

