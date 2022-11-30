

//CRUD operation with firebase
//test data
const userData = {
    name : 'test'
};

//get all data
const getAllData = async (collection)=>{
    await db.collection(collection).doc().get().then((doc)=>{
        if(doc.exists){
            console.log(doc._fieldsProto)
        }else{
            console.log('document not found')
        }
    }).catch((err)=>{console.log(err)});
}


//get data
const getData =async  (collection,document)=>{
    await db.collection(collection).doc(document).get().then((doc)=>{
        if(doc.exists){
            console.log(doc._fieldsProto)
        }else{
            console.log('document not found')
        }
    }).catch((err)=>{console.log(err)});
}


// create document
const createData = async(collection,data)=>{
    await db.collection(collection).doc().set(data).then(()=>{
        console.log('new user added to database')
    })
}

//update document
const updateData = async (collection,document,data)=>{
    await db.collection(collection).doc(document).set(data).then(()=>{
        console.log('new user added to database')
    })
}
//delete data
const deleteData = async (collection,document)=>{
    await db.collection(collection).doc(document).delete()
}

exports.default = {getData,getAllData,createData,updateData,deleteData};