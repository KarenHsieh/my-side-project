// refer
// https://ithelp.ithome.com.tw/articles/10190619

const express = require('express')
const next = require('next')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


// var engine = require('ejs-locals');
var bodyParser = require('body-parser');
var admin = require("firebase-admin");


var admin = require("firebase-admin");

var serviceAccount = require("../key/my-side-project-bca31-firebase-adminsdk-afov5-1bab7b5d0f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://my-side-project-bca31-default-rtdb.firebaseio.com"
});


var fireData = admin.database();

console.log(fireData);

app.prepare()
.then(() => {
  const server = express()
 

  //增加靜態檔案的路徑
  server.use(express.static('public'))

  // 增加 body 解析
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({extended:false}))

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  

  // 監聽 port

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})




