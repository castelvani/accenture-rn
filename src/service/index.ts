import axios from "axios";

export const contactSend = axios.create({
    baseURL: "https://webhook.site/b2ae91a5-b86d-4857-a4e1-c86fbfceddef"
})

export const getData = axios.create({
    baseURL: "https://accenture-server-rn.herokuapp.com/"
})