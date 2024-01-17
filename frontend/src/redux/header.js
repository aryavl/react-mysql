import {createSlice} from "@reduxjs/toolkit"

const INITIAL_STATE={
  header_table:[{  vr_no:0,
    vr_date:'',
    ac_name:"unplug",
    ac_amt:0,
    status:""
  }]
}
const headerSlice = createSlice({
    name:"header",
    initialState:INITIAL_STATE,
    reducers:{
        showHeaderTableData:(state)=>{
            return {...state,status:"A"}
        }
    }
})

export const {showHeaderTableData}= headerSlice.actions
export default headerSlice.reducer