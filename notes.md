## obsolete stuff
Install the JS SDK

```bash
$ npm install firebase-admin --save
```

### credentials
Generate a private key file for your service account

[Initialize the SDK](https://firebase.google.com/docs/admin/setup#initialize-sdk)

1. In the Firebase console, open Settings > [Service Accounts](https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk).

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
