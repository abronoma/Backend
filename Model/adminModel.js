import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
// const sequelize = new sequelize('mysql');


const admin = sequelize.define('admin', {
    id: {
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM,
        values: ['male', 'female', 'other'],
       
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    Region: {
        type: DataTypes.STRING,
        defaultValue: 'Central' 
    }

}, {
    timeStamps: true
});

await admin.sync();
console.log('The table for the User model was just (re)created!');


export default admin;