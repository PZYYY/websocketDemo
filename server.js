const WebSocket = require("ws");
const wss = new WebSocket.Server({
  port: 3000
})
wss.on('connection', (ws) =>{
  ws.send('hello client')
  ws.on('message', (e) => { // 监听客户端send的数据
    console.log(e)
  })
  ws.on('error', () => {

  })
})