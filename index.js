//module inports
const express = require('express');
const app = express();
const cors = require("cors");
const admin = require('firebase-admin');
const serviceAccount = require('./ServiceAccountKey.json')


//Api Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));



//Initializing firebase
admin.initializeApp({
    credential:admin.credential.cert(serviceAccount)
})
const db = admin.firestore();



//global constants
const port =  12345;


app.use(express.static('./public'));

//using routes



//App route
app.post('/db',async (req,res)=>{
    let req_type = req.body.type
    let collection = req.body.collection
    console.log(req_type)
    if(req_type ==="getOne"){
        await db.collection(collection).get().then((querySnapshot) => {
            res.json({
                data : querySnapshot.docs,
                msg : 'success'
            })
        });      

    }else if(req_type ==="getAll"){
        await db.collection(collection).get().then((querySnapshot) => {
            res.json({
                data : querySnapshot.docs,
                msg : 'success'
            })
        });
    }else if(req_type ==="create"){
        let data = req.body.data
        console.log(collection,data);
        await db.collection('Users').doc().set(data).then(()=>{
            res.json({
                msg: 'added to database',
            })
        })
    }else if(req_type ==="update"){
        let document = req.body.document
        let data = req.body.data
        console.log(collection,data,document);
        await db.collection(collection).doc(document).set(data).then(()=>{
            res.json({
                msg: 'user updated to database',
            })
        })
    }else if(req_type ==="delete"){
        await db.collection(collection).doc(document).delete().then(()=>{
            res.json({
                msg : 'User deleted from database'
            })
        })
    }
    else{
        res.json({
            msg : 'send proper request'
        })
    }

    res.end()
})

app.listen(port,() => {console.log('listening on http://127.0.0.1:' + port)});
