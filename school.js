import mongodb from 'mongodb';
const client = new mongodb.MongoClient('mongodb+srv://carlieDup:Aloulou0905@cluster0.ywpqv.mongodb.net?retryWrites=true&w=majority');


const db = client.db('myschool-project');// data base name
await client.connect();

console.log('Conneted To myschool-project');



let city = db.collection('city');
//let schools = db.collection('schools');




// await schools.incsertOne({
//   name: "Olympic High",
//   courses: "english",
//   teacher: "barreto",
//   hours: "2 h",
//   type: "high school",
//   rate: "7/10",
// // });

// await city.incsertOne({
//     name:'Boca Raton',
//     couty: 'Palm Beach',
//     state:'Florida'
   
// });
// await city.incsertOne({
//     name:'miami',
//     couty: 'dade county',
//     state:'Florida'
   
// });

// await city.incsertOne({
//     name:'fortladerdale',
//     county: 'braword',
//     state:'florida'
// });



// await city.insertOne({
//     name:'niagara',
//     county:'columbia',
//     state:'new york'
// });




await client.close();
