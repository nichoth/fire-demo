# Firestore

Trying firestore

------------------------------------

https://cloud.google.com/firestore/docs/create-database-server-client-library#initialize


## server side

https://firebase.google.com/docs/admin/setup?authuser=0

https://firebase.google.com/docs/firestore/

https://cloud.google.com/firestore/docs/create-database-server-client-library#initialize

_my test db thing_
https://console.firebase.google.com/project/test-nov-10/settings/general/web:YmMxMTVkNTUtMGJlYy00MDIxLWFhZGYtN2NmMzhhZDk4MGMw

_test project id_
test-nov-10


---------------------------------------------

Install the JS SDK

```bash
$ npm install firebase-admin --save
```

### credentials
Generate a private key file for your service account

1. In the Firebase console, open Settings > Service Accounts.

2. Click Generate New Private Key, then confirm by clicking Generate Key.

3. Securely store the JSON file containing the key.

4. `gitignore` the JSON file containing the keys


https://firebase.google.com/docs/admin/setup

```js
var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://test-nov-10.firebaseio.com"
});
```

-------------------------------------------------

[Quickstart using a server client library](https://cloud.google.com/firestore)

[good quickstart doc](https://cloud.google.com/firestore/docs/create-database-server-client-library#initialize)

https://cloud.google.com/firestore/docs/create-database-server-client-library

This uses a DB hosted by google, not running locally.

```js
const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
  projectId: 'YOUR_PROJECT_ID',
  keyFilename: '/path/to/keyfile.json',
});

const docRef = db.collection('users').doc('alovelace')

docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
})
.then(res => {
    console.log('res', res)
})
.catch(err => {
    console.log('errrrrr', err)
})
```
