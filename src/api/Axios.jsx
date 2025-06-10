import axios from "./DefaultApi"

const ApiPhimBo = async (props) => {
    try {
        const res = await axios.get(`/danh-sach/phim-bo?page=${props.page}`)
        return res.data;
    } catch (err) {
        console.log('Lỗi: ', err)
    }
}

const ApiPhimLe = async (props) => {
    try {
        const res = await axios.get(`/danh-sach/phim-le?page=${props.page}`)
        return res.data;
    } catch (err) {
        console.log('Lỗi: ', err)
    }
}

const ApiPhimHoatHinh = async ({ page }) => {
    try {
        const res = await axios.get(`/danh-sach/hoat-hinh?page=${page}`)
        return res.data;
    } catch (err) {
        console.log('Lỗi: ', err)
    }
}

const ApiTheLoai = async (props) => {
    try {
        const res = await axios.get(`/the-loai/${props.theloai}?page=${props.page}`)
        return res.data;
    } catch (err) {
        console.log('Lỗi: ', err)
    }
}

const ApiQuocGia = async ({ quocgia, page }) => {
    try {
        const res = await axios.get(`/quoc-gia/${quocgia}?page=${page}`)
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