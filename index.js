import mongodb from 'mongodb';
const client = new mongodb.MongoClient(process.env.MONGO_URI)

const db = client.db('schools-mongo-project');
await client.connect();


console.log('Connected Test');


let schoolRating = db.collection('school-rating');
// let elementarySchool = db.collection('elementary-schools');
// let pKschool = db.collection('pk-schools');
// let highSchool = db.collection('high-schools');

// 1-
// await schoolRating.insertOne({
//     name:'Okaloosa Stemm Center',
//     type:'PK ,Public district, PK, 6-8',
//     address:'379 Edge Avenue, Valparaiso, FL, 32580',
//     rate: '10/10',
//     students: '279 students'
// });


// await schoolRating.insertOne({
    
//     name:'Palencia Elementary School',
//     type:'PK, Public district, PK-5',
//     address:'355 Palencia Village Drive, St. Augustine, FL, 32095',
//     rate: '10/10',
//     students: '843 students'
// })

// await schoolRating.insertOne({
//     name: 'Cypress Ridge Elementary School',
//     type:'Elemtary ,Public district, PK-5',
//     address:'50 East Avenue, Clermont, FL, 34711',
//     rate: '10/10',
//     studenst:'580 students',
// });

// await schoolRating.insertOne({
//     name:'Franklin Academy Pembroke Pines',
//     type: 'Elementary, Public charter, K-8',
//     address:'18800 Pines Boulevard, Pembroke Pines, FL, 33029',
//     rate:'10/10',
//     students:'1,392 students'
// // })

// await schoolRating.insertOne({
//     name:'Edgewood Jr/Sr High School',
//     type: 'High School, Public district',
//     address:'180 East Merritt Avenue, Merritt Island, FL, 32953',
//     rate:'9/10',
//     students:'948 students'
// });
// await schoolRating.insertOne({
//     name:'Westshore Junior/Senior High School',
//     type: 'High School Public district, 7-12',
//     address:'250 Wildcat Alley, Melbourne, FL, 32935',
//     rate:'8/10',
//     students:'953 students'
// });

// await schoolRating.insertOne({
//     name:'3dlearn Interactive Academy',
//     type: 'High School Private, 7-12',
//     address:'27499 Riverview Center Blvd, Bonita Springs, FL, 34134',
//     rate:'NA',
//     students:'NA'
// });


// await schoolRating.insertOne({
//     name:'Beachside Montessori Village',
//     type: 'Middle School Public district, PK-8',
//     address:'2230 Lincoln Street, Hollywood, FL, 33020',
//     rate:'10/10',
//     students:'787 students'
// });




// 2-

const results  = schoolRating.find({
    name: 'Franklin Academy Pembroke Pines',

});
// const schools = await results.toArray();
// console.log(schools);

// 3-
// const result = { name: 'Cypress Ridge Elementary School'};
// const updatedRes = {$set : {type: '8/10', students: '300 Female Students and 280 Male students'}};
// await schoolRating.updateOne(result, updatedRes);
// console.log('School info updated');


// 4-  delete the school with the id_626a4db6911c5044982715e7: Okaloosa Stemm Center
//let result = { schoolRating_id : '626a4db6911c5044982715e7'};
// let result = { name: 'Okaloosa Stemm Center'};
// await schoolRating.deleteOne(result);
// console.log('1 school deleted');





await client.close();



