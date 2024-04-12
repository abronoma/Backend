import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
// const sequelize = new sequelize('mysql');


const facilitator = sequelize.define('Facilitators', { 
    fac_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    
    fac_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
  
    fac_region: {
        type: DataTypes.STRING,
        defaultValue: 'Central' 
    }

}, {
    timestamps: true 
});

export default facilitator;