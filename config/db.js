import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
  }
);

try {
  sequelize.authenticate();
  console.log("mysql connection established");
} catch (error) {
  console.error("mysql connection failed", error);
}

export default sequelize;

// const Db = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"Getty@1234",
//     database:"AGFTRACKER"
// })

// Db.connect(function(err) {
//     if(err){
//       console.log("connection Denied", err)
//     } else {
//         console.log("connection successful")
//     }
// })

// export default Db;
