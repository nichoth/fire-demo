// this is a server side file

const Firestore = require('@google-cloud/firestore')

const db = new Firestore({
    projectId: 'test-nov-10',
    keyFilename: __dirname + '/test-nov-10-firebase-adminsdk-1cmdm-5ec062ea7c.json'
})

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
