// const { initializeApp } = require('firebase-admin/app')


var admin = require("firebase-admin")
var serviceAccount = require("./test-nov-10-firebase-adminsdk-1cmdm-5ec062ea7c.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://test-nov-10.firebaseio.com"
})


