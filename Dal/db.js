const autoBind = require('auto-bind');
const mongoose=require('mongoose');
async function connect(){
    autoBind(this);
    try{
        await mongoose.connect('mongodb+srv://sw0504147596:1234@cluster.vtbpacr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster',
            {
                useNewUrlParser :  true ,
                useUnifiedTopology :  true ,
                dbName:'Nodejs-Project'
            }
        );
        console.log('Connected to NodeJs-project');
}
catch(err){
    console.log(err);
    throw new Error("Error connecting to db. please try later...");
    }
}

module.exports= {connect}