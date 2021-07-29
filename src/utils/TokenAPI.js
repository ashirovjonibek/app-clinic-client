import React, { useEffect } from "react";
import axios from "axios";
import { API_URL, STORAGE_NAME } from "./constant";


const token = localStorage.getItem(STORAGE_NAME);
const ServerApi = axios.create({
    baseURL: API_URL,
    headers: {
        'Authorization': token
    },
});

export default ServerApi;