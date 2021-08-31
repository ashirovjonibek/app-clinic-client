import {STORAGE_NAME} from "./constant";
import axios from "axios";

export const userMe = (pathname) => {
    const token = localStorage.getItem(STORAGE_NAME);
    axios({
        url: 'http://localhost:8080/api/auth/me',
        method: 'GET',
        headers: {
            'Authorization': token
        }
    });
};