import {v4 as uuidv4} from 'uuid'
const createHeaderModel = (sequelize, DataTypes) => {
  const Header = sequelize.define("Header", {
    vr_no: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey: true,
      
    },
    vr_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, 
      allowNull: false,
    },
    ac_name:{
        type:DataTypes.STRING(200),
        allowNull:false
    },
    ac_amt:{
        type:DataTypes.DECIMAL(18,2),
        allowNull:false,
    },
    status:{
        type:DataTypes.CHAR(1),
        allowNull:false,
        validate:{
            isIn:[['A','I']]
        },
    }
  });
 
  return Header;
};

export default createHeaderModel;
