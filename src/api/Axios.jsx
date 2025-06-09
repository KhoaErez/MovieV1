import axios from "./DefaultApi"

const ApiPhimBo = async () => {
    try {
        const res = await axios.get('/danh-sach/phim-bo?page=1')
        return res.data;
    } catch (err) {
        console.log('Lỗi: ', err)
    }
}

const ApiPhimLe = async () => {
    try {
        const res = await axios.get('/danh-sach/phim-le?page=1')
        return res.data;
    } catch (err) {
        console.log('Lỗi: ', err)
    }
}

const ApiPhimHoatHinh = async () => {
    try {
        const res = await axios.get('/danh-sach/hoat-hinh?page=1')
        return res.data;
    } catch (err) {
        console.log('Lỗi: ', err)
    }
}

const ApiTheLoai = async (props) => {
    try {
        const res = await axios.get(`/the-loai/${props.theloai}?page=1`)
        return res.data;
    } catch (err) {
        console.log('Lỗi: ', err)
    }
}

const ApiQuocGia = async (props) => {
    try {
        const res = await axios.get(`/quoc-gia/${props.quocgia}?page=1`)
        return res.data;
    } catch (err) {
        console.log('Lỗi: ', err)
    }
}

const ApiSearch = async (slug) => {
    try {
        const res = await axios.get(`/search?keyword=${slug}`)
        return res.data;
    } catch (err) {
        console.log('Lỗi: ', err)
    }
}

export { ApiPhimBo }
export { ApiPhimLe }
export { ApiPhimHoatHinh }
export { ApiTheLoai }
export { ApiQuocGia }
export { ApiSearch }    