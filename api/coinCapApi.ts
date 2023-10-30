import axios from "axios";

const coinCap = axios.create({
    baseURL: 'http://api.coincap.io/v2'
});

export default coinCap;