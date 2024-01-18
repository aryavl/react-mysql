import { generateItemCode } from "../helpers/modelHelper.js";
import createItemMasterModel from "../models/itemMasterModel.js";
import db from "../models/index.js";

export const getItems = async(req,res)=>{
    try {
        const {ItemMaster} = db.models

        const allItems = await ItemMaster.findAll()
        console.log(allItems);
        res.status(200).json(allItems)
    } catch (error) {
        console.log("getItems error ",error);
    }
}