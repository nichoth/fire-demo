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

--------------------------------------

> You can also use the get method to retrieve the entire collection.

```js
const snapshot = await db.collection('users').get();
snapshot.forEach((doc) => {
  console.log(doc.id, '=>', doc.data());
});
```

------------------------------------------

[Paginating data with query cursors](https://cloud.google.com/firestore/docs/query-data/query-cursors)


