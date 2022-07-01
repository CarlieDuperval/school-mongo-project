import mongodb from "mongodb";
const client = new mongodb.MongoClient(
  "mongodb+srv://carlieDup:Aloulou0905@cluster0.ywpqv.mongodb.net?retryWrites=true&w=majority"
);

const db = client.db("myschool-project"); // data base name
await client.connect();

console.log("myschool-Connected!");

let city = db.collection("city");
let schools = db.collection("schools");

await city.insertOne({
    name:'Boca Raton',
    couty: 'Palm Beach',
    state:'Florida2'

});

// await city.insertOne({
//     name:'Blase Drive',
//     county:'melbourne',
//     state:'florida',
// })

// await city.insertOne({
//     name:'miami',
//     couty: 'dade county',
//     state:'Florida'

// });

// await city.insertOne({
//     name:'fortladerdale',
//     county: 'braword',
//     state:'florida'
// });

// await city.insertOne({
//   name: "niagara",
//   county: "columbia",
//   state: "new york",
// });

// await schools.insertOne({
// city_id :'626b30d6972144172a83cb83',
// name:'Olympic High',
// courses:'english',
// teacher:'barreto',
// type: 'high school',
// rate: '7/10',
//  });

// await schools.insertOne({
//   city_id: '626b311626e48b72e039e38b',
//   name: "Fench Of America",
//   courses: "French",
//   teacher: "barreto",
//   type: "midle school",
//   rate: "9/10",
// });

// await schools.insertOne({
//   city_id: '626b321208efd899b29f78b6',
//   name: "Suntree Elementary School",
//   courses: "French",
//   teacher: "barreto",
//   type: "midle school",
//   rate: "9/10",
// });

// await schools.insertOne({
//     city_id:'626b321208efd899b29f78b6',
//     name:'Patriot Oaks Academy',
//     courses:'history',
//     teacher:'carbone',
//     type:'elementery school',
//     rate:'10/10'
// })

// Get school by city?  i have Florida and florida? How can i made my request to get all together
// let school = city.find({state:'florida'})
// const result = await school.toArray()
// console.log(result)

//const result = { name:'Patriot Oaks Academy'};
// const result0 = { schools_id:'626b3d0bf205c83832cfb7d9'}
// const updateRes0 = {$set : {coach: 'peter'}};
// await schools.updateOne(result0, updateRes0);
// console.log('Scholl info updated');

// Why i can't update with the scholl_id : '626b3440713bd034669f8b9c'???
// const result2 = { name: "Fench Of America" };
// const updateRes2 = { $set: { coach: "peter", awesome: true } };
// await schools.updateOne(result2, updateRes2);
// console.log("Scholl info updated");

// const result = { schools_id: '626b3a0f1e5d438f39f752fd'}
// const updateRes = {$set : {teacher: 'peter'}};
// await schools.updateOne(result, updateRes);
// console.log('Scholl info updated');

//this never updated ?????
const result1 = { schools_id: '626b3440713bd034669f8b9c'}
const updateRes = {$set: { awesome: false }};
await schools.updateOne(result1, updateRes);
//console.log('Scholl info updated');

// delete the school with the id_626b3e11556b2119fccd7f57' : "Patriot Oaks Academy"

// let result = { schools_id : '626b3e11556b2119fccd7f57'};
// await schools.deleteOne(result);
// console.log('1 school deleted');

await client.close();
