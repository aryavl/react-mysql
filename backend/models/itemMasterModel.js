import { generateItemCode } from "../helpers/modelHelper.js"

 const createItemMasterModel = (sequelize, DataTypes)=>{
    const ItemMaster =  sequelize.define("ItemMaster",{
        item_code:{
            type:DataTypes.STRING(20),
            primaryKey:true,
            allowNull:false,
            
        },
        item_name:{
            type:DataTypes.STRING(200),
            allowNull:false,
        },
        item_rate:{
            type:DataTypes.DECIMAL(18,2),
            allowNull:false
        },
       
    }, {
        timestamps: true,
        createdAt: 'created_at', // Customize createdAt column name if needed
        updatedAt: 'updated_at', 
    })
    // sequelize.sync().then(() => {
    //     ItemMaster.bulkCreate([
    //         { item_code: 'ITEM11', item_name: 'Item 1', item_rate: 10.99 },
    //         { item_code: 'ITEM22', item_name: 'Item 2', item_rate: 15.50 },
    //         { item_code: 'ITEM33', item_name: 'Item 3', item_rate: 8.75 }
    //     ]).then(() => {
    //         console.log('Records inserted successfully.');
    //     }).catch((error) => {
    //         console.error('Error inserting records:', error);
    //     });
    // });
    return ItemMaster
}

export default createItemMasterModel
