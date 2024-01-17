import { generateItemCode } from "../helpers/modelHelper.js"

 const createItemMasterModel = (sequelize, DataTypes)=>{
    const ItemMaster =  sequelize.define("ItemMaster",{
        item_code:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            defaultValue:()=>generateItemCode()
        },
        item_name:{
            type:DataTypes.STRING(200),
            allowNull:false,
        },
        item_rate:{
            type:DataTypes.DECIMAL(18,2),
            allowNull:false
        }
    })
    return ItemMaster
}
export default createItemMasterModel
