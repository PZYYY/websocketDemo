# websocketDemo
websocket简易交互demo

### 1、在根目录安装ws依赖包
  * npm init
  * npm i ws
  * 安装成功后根目录会多出3个文件：package.json，package-lock.json,node_modules
  * 在package.json中可以看到安装的依赖
  "dependencies": {
    "ws": "^7.2.5"
  }
  
  
 ### 2、server.js表示服务器端，client.html表示客户端
  **server.js：**
  * const WebSocket = require("ws"); // 引入依赖包
  * const wss = new WebSocket.Server({
     port: 3000
   }) // 创建一个websocket服务端实例，并指定端口号为3000
  * 启动服务：node server.js
  
 **client.html：**
  * var ws = new WebSocket('ws://192.168.3.30:3000'); // 与服务端建立连接
  * ws.onopen：连接成功
  
