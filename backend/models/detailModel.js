import { v4 as uuidv4 } from "uuid";
export const createDetailModel = (sequelize, DataTypes) => {
  const Detail = sequelize.define("Detail", {
    vr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: "Headers",
      //   key: "vr_no",
      // },
    },
    sr_no: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    item_code: {
      type: DataTypes.STRING(20),
      allowNull: false,
      // references: {
      //   model: "ItemMaster",
      //   key: "item_code",
      // },
    },
    item_name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(3000),
      allowNull: true,
    },
    qty: {
      type: DataTypes.DECIMAL(18, 3),
      allowNull: false,
    },
    rate: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false,
    },
  });

  return Detail;
};
export default createDetailModel;
