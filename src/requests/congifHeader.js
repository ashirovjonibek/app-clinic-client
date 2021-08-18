import {STORAGE_NAME} from "../utils/constant";

export const configHeader=({headers:{
        'Authorization':localStorage.getItem(STORAGE_NAME),
        'Access-Control-Allow-Origin': '*'
    }})
