import axios from "axios";

export default axios.create({
    baseURL: 'https://phim.nguonc.com/api/films'
})

