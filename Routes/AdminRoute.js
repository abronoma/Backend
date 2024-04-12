import express from 'express'
import con from '../config/db.js'

const router = express.Router()

// router.post('/adminlogin', (req, res) => {
//   const sql = 'SELECT * FROM EMP'
//   con.query(sql, [req.body.email, req.body.password]), (err, result) => {
//     if(err)  return res.json({loginStatus: false, Error: "Query error"})
//     if(result.length > 0) {
//         const email = result[0].email;
//         const token = jwt.sign({role: "admin", email:email}, "jwt_secret_key", {expiresIn: "3days"}})
//     }
//   } 
// })



export{router as adminRouter}