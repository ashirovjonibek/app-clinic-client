import {API_URL} from "../utils/constant";
import axios from "axios";
import {configHeader} from "./congifHeader";

const {apiPath} = require("./apiPath");

class RequestFunctions {


    /**
     **************************************** words-controller operations *******************************************************************************************
     **/
    static async createWords(data) {
        let response;
        await axios.post(API_URL + apiPath.createWords, data, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                console.log(res)
                response = res
            })
        return response
    }

    static async getWords() {
        let response;
        await axios.get(API_URL + apiPath.getWords, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                console.log(res)
                response = res
            })
        return response
    }

    static async updateWords(id, data) {
        let response;
        await axios.put(API_URL + apiPath.updateWords + id, data, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                console.log(res)
                response = res
            })
        return response
    }

    static async deleteWords(id) {
        let response;
        await axios.delete(API_URL + apiPath.deleteWords + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                console.log(res)
                response = res
            })
        return response
    }


    /**
     ***************************************** menu-controller operations *******************************************************************************************
     **/
    static async createMenu(data) {
        let response;
        await axios.post(API_URL + apiPath.createMenu, data, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                console.log(res)
                response = res
            })
        return response
    }

    static async getMenus() {
        let response;
        await axios.get(API_URL + apiPath.getMenus, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                console.log(res)
                response = res
            })
        return response
    }

    static async getMenu(id) {
        let response;
        await axios.get(API_URL + apiPath.getMenu + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                console.log(res)
                response = res
            })
        return response
    }

    static async updateMenu(id, data) {
        let response;
        await axios.put(API_URL + apiPath.updateMenu + id, data, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                console.log(res)
                response = res
            })
        return response
    }

    static async deleteMenu(id) {
        let response;
        await axios.delete(API_URL + apiPath.deleteMenu + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                console.log(res)
                response = res
            })
        return response
    }


    /**
     ********************************************* Users and Auth operations *******************************************************************************************
     **/

    static async loginUser(data) {
        let response;
        await axios.post(API_URL + apiPath.loginUser, data, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                console.log(res)
                response = res
            })
        return response
    }

    static async createListener(data) {
        let response;
        await axios.post(API_URL + apiPath.createListener, data, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                console.log(res)
                response = res
            })
        return response
    }

    static async createApplicant(data) {
        let response;
        await axios.post(API_URL + apiPath.createApplicant, data, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                response = res.response.data
            })
        return response
    }

//ERROR
    static async getListeners() {
        let response;
        await axios.get(API_URL + apiPath.getListeners, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async getApplicant() {
        let response;
        await axios.get(API_URL + apiPath.getApplicant, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    //@Current user bor
    static async getMe() {
        let response;
        await axios.get(API_URL + apiPath.getMe, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async getRoles() {
        let response;
        await axios.get(API_URL + apiPath.getRoles, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async updateUser(id, data) {
        let response;
        await axios.put(API_URL + apiPath.updateUser + id, data, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async updateListenerByRole(roleId, userId) {
        let response;
        await axios.put(API_URL + apiPath.updateListenerByRole, {
            params: {
                roleId: roleId,
                userId: userId
            }
        }, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }


    /**
     ***************************************** application-controller operations *******************************************************************************************
     **/
    static async createApplication(data) {
        let response;
        await axios.post(API_URL + apiPath.createApplication, data, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                console.log(res)
                response = res
            })
        return response
    }

    static async getApplication(uuid) {
        let response;
        await axios.get(API_URL + apiPath.getApplication + uuid, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                console.log(res)
                response = res
            })
        return response
    }

    static async updateApplication(uuid, data) {
        let response;
        await axios.put(API_URL + apiPath.updateApplication + uuid, data, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                console.log(res)
                response = res
            })
        return response
    }

//@Current user bor
    static async getApplicationListener(page, size) {
        let response;
        await axios.get(API_URL + apiPath.getApplicationListener + '?page=' + page + '&size=' + size, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                console.log(res)
                response = res
            })
        return response
    }

//@Current user bor
    static async getApplicationApplicant(page, size) {
        let response;
        await axios.get(API_URL + apiPath.getApplicationApplicant + '?page=' + page + '&size=' + size, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                console.log(res)
                response = res
            })
        return response
    }


    /**
     ************************************** answer-controller operations *******************************************************************************************
     **/
    static async createAnswer(data) {
        let response;
        await axios.post(API_URL + apiPath.createAnswer, data, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                console.log(res)
                response = res
            })
        return response
    }

    static async getAnswer(uuid) {
        let response;
        await axios.get(API_URL + apiPath.getAnswer + uuid, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                console.log(res)
                response = res
            })
        return response
    }

    static async updateAnswer(uuid, data) {
        let response;
        await axios.put(API_URL + apiPath.updateAnswer + uuid, data, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                console.log(res)
                response = res
            })
        return response
    }

    static async getAnswers() {
        let response;
        await axios.get(API_URL + apiPath.getAnswers, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                console.log(res)
                response = res
            })
        return response
    }

    static async deleteAnswer(uuid) {
        let response;
        await axios.delete(API_URL + apiPath.deleteAnswer + uuid, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                console.log(res)
                response = res
            })
        return response
    }

    static async updateAnswerByListener(uuid) {
        let response;
        await axios.put(API_URL + apiPath.updateAnswerByListener + uuid, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                console.log(res)
                response = res
            })
        return response
    }

    static async updateAnswerChangedListener(answerId, listenerId) {
        let response;
        await axios.put(API_URL + apiPath.updateAnswerByListener, {
            params: {
                answerId: answerId,
                listenerId: listenerId
            }
        }, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                console.log(res)
                response = res
            })
        return response
    }

    static async getAnswerListenerIsNull() {
        let response;
        await axios.get(API_URL + apiPath.getAnswerListenerIsNull, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                console.log(res)
                response = res
            })
        return response
    }

    static async getAnswerListener(uuid) {
        let response;
        await axios.get(API_URL + apiPath.getAnswerListener + uuid, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                console.log(res)
                response = res
            })
        return response
    }


    /**
     *************************************** position-controller operations *******************************************************************************************
     **/
    static async createPosition(data) {
        let response;
        await axios.post(API_URL + apiPath.createPosition, data, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                console.log(res)
                response = res
            })
        return response
    }

    static async getPositions() {
        let response;
        await axios.get(API_URL + apiPath.getPositions, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                console.log(res)
                response = res
            })
        return response
    }

    static async getPosition(id) {
        let response;
        await axios.get(API_URL + apiPath.getPosition + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                console.log(res)
                response = res
            })
        return response
    }


    /**
     *************************************** attachment-controller operations *******************************************************************************************
     **/
    static async uploadAttachment(data) {
        let response;
        await axios.post(API_URL + apiPath.uploadAttachment, data, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                console.log(res)
                response = res
            })
        return response
    }

    static async getAttachment(uuid) {
        let response;
        await axios.get(API_URL + apiPath.getAttachment + uuid, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                console.log(res)
                response = res
            })
        return response
    }


}

export default RequestFunctions;