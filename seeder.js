// const fs = require('fs');
// const mongoose = require('mongoose');
// const colors = require('colors');
// const dotenv = require('dotenv');
// // load env vars
// dotenv.config({ path: './config/config.env' });
// // load models
// const Bootcamp = require('./models/Bootcamp');
// const Course = require('./models/Course');
// const User = require('./models/User');

// // connect to db
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true
// });

// // read json files
// const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8'));
// const courses = JSON.parse(fs.readFileSync(`${__dirname}/_data/courses.json`, 'utf-8'));
// const users = JSON.parse(fs.readFileSync(`${__dirname}/_data/users.json`, 'utf-8'));

// // import into mongo
// const importData = async () => {
//   try {
//     await Bootcamp.create(bootcamps);
//     await Course.create(courses);
//     await User.create(users);
//     console.log('Data imported...'.green.inverse);
//     process.exit();
//   } catch (err) {
//     console.error(err);
//   }
// }

// // delete data from mongo
// const deleteData = async () => {
//   try {
//     await Bootcamp.deleteMany();
//     await Course.deleteMany();
//     await User.deleteMany();
//     console.log('Data destroyed...'.red.inverse);
//     process.exit();
//   } catch (err) {
//     console.error(err);
//   }
// }

// // type into terminal 'node seeder -i'
// if (process.argv[2] === '-i') {
//   importData()
// } else if (process.argv[2] === '-d') {
//   deleteData()
// }