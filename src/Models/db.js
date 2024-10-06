
// f1Vg2cZdL3bDFLh9

const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');
const mongo_url = process.env.MONGO_CONN;

mongoose.connect(mongo_url)
    .then(() => {
        console.log("MongoDB Connected");
    }).catch((err) => {
        console.log("MongoDB Connection Error: ", err);
    })


