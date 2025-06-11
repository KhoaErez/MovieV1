import axios from "axios";

export default axios.create({
    baseURL: 'https://phimapi.com/v1/api'
    // baseURL: 'https://phim.nguonc.com/api/films'

})

