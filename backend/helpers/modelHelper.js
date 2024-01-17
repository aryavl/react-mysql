import {v4 as uuidv4} from 'uuid'

export const generateItemCode = () =>{
    const uuid = uuidv4()
    return `${uuid.toUpperCase().replace(/-/g,"").substring(0,4)}`
}