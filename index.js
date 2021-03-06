// this is a server side file

const test = require('tape')
const Firestore = require('@google-cloud/firestore')

const db = new Firestore({
    projectId: 'test-nov-10',
    keyFilename: __dirname + '/test-nov-10-firebase-adminsdk-1cmdm-5ec062ea7c.json'
})

// 'alovelace' is the id for the doc
const lovelaceRef = db.collection('users').doc('alovelace')
const aTuringRef = db.collection('users').doc('aturing')

Promise.all([
    lovelaceRef.set({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815
    }),

    aTuringRef.set({
        'first': 'Alan',
        'middle': 'Mathison',
        'last': 'Turing',
        'born': 1912
    }),

    db.collection('users').doc('foo').set({
        first: 'foo',
        last: 'Bar',
        born: 8888
    })
])
    .then(() => {
        // db.collection('users').orderBy('last').limit(2)
        db.collection('users').orderBy('last', 'desc')
            .get()
            .then(snapshot => {
                console.log('__ordered__')
                snapshot.forEach((doc) => {
                    console.log(doc.id, '=>', doc.data())
                })
            })


        db.collection('users')
            .get()
            .then(snapshot => {
                console.log('__users__')
                snapshot.forEach((doc) => {
                    console.log(doc.id, '=>', doc.data())
                })
            })
    })
