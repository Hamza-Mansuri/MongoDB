const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Sample").then(()=>{

    console.log("connected to mongoDB");
    
}).catch((err) =>{

    console.log(err);
    
})

//First Create a Schema

const student = new mongoose.Schema({

    name:String,
    workout:Boolean,
    height:Number
})

//then we have to create a Model(Collections)

const Student = new mongoose.model("Students",student)

//then add the data

const adder = async() => {

    // const ss = await Student.create({

    //     name:"HAMZA",
    //     workout:false,
    //     height:5

        
        
    // })
    // console.log(ss);
    

    const ss2 = await Student.find({height:{$nin:[5,6]}})

    console.log(ss2);
    
}

adder();
