import {v4 as uuidv4} from 'uuid'

export const generateItemCode = () =>{
    const randomNumber = Math.floor(1+Math.random() * 999)
    return `ITEM ${randomNumber}`
}