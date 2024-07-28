const dotenv = require("dotenv");


dotenv.config({
    path: "config/config.env"
    
});
const connectDatabase = require("./config/database");
// console.log(process.env);y
const app = require("./app");


connectDatabase();

const server = app.listen(process.env.PORT, ()=>{
    console.log(`server is working on HTTP://lochost:${process.env.PORT}`)
});