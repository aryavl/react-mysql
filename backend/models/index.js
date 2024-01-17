import { DataTypes, Sequelize } from "sequelize";
import myDB from "../config/dbConfig.js";
import createHeaderModel from "./headerModel.js";
import createDetailModel from "./detailModel.js";
import createItemMasterModel from "./itemMasterModel.js";

const sequelize = new Sequelize(
    myDB.DB,
    myDB.USER,
    myDB.PASSWORD,
    {
        host:myDB.HOST,
        dialect:myDB.dialect,
        
        pool:{
            max:myDB.pool.max,
            min:myDB.pool.min,
            acquire:myDB.pool.acquire,
            idle:myDB.pool.idle,
        }
    }

)

export const  authenticateDatabase=async()=> {
    try {
      await sequelize.authenticate();
      console.log('Connection to the database has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
  
  
  
  export const syncDatabase=async()=>{
        try {
            await sequelize.sync({force:false})
            console.log('yes re-sync done!');
        } catch (error) {
            console.log("Error in re sync ",error);
        }
  }
  const db={
    Sequelize,
    sequelize,
    models:{
        Header : createHeaderModel(sequelize,DataTypes),
        Detail: createDetailModel(sequelize,DataTypes),
        ItemMaster: createItemMasterModel(sequelize,DataTypes)
    }
  }
  db.models.Detail.belongsTo(db.models.Header,{
    foreignKey:'vr_no',
    as:'header',
  })
  db.models.Detail.belongsTo(db.models.ItemMaster,{
    foreignKey:'item_code',
    as:'itemMaster'
  })
  export default db