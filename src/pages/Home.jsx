import { useEffect, useState } from 'react';
import videoHomePage from '../assets/3.mp4';
import MovieList from '../components/movie-list/MovieList';
import { ApiPhimBo, ApiPhimHoatHinh, ApiPhimLe } from '../api/Axios.jsx';

const Home = () => {

    const [allMovie, setAllMovie] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const phimLeData = await ApiPhimLe()
            const phimBoData = await ApiPhimBo()
            const phimHoatHinhData = await ApiPhimHoatHinh()
            const apiAll = {
                'phimLe': phimLeData,
                'phimBo': phimBoData,
                'phimHoatHinh': phimHoatHinhData,
            }
            setAllMovie(apiAll)
        }
        fetchData()
    }, [])

    return (
        <div className="homepage-container">
            <div className='row homepage-title'>
                <div className='homepage-title-content col-sm-12 col-md-6'>
                    <div className='titlle-1'>Trần Doãn Khoa</div>
                    <div className='titlle-2'>
                        Hi mọi người! Đây là trang web được mình xây dựng với mục đích mang đến trải nghiệm xem phim thoải mái, không quảng cáo và không bị làm phiền. Đồng thời, đây cũng là nơi mình thực hành lập trình và chia sẻ những kiến thức công nghệ mình học được. Tất cả nội dung đều phục vụ cho mục tiêu cá nhân, phi thương mại. Nếu có bất kỳ vấn đề nào liên quan đến bản quyền, xin vui lòng liên hệ để mình xử lý kịp thời. Chân thành cảm ơn!</div>
                    <div className='titlle-3'>
                        <button>Xem thêm</button>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6'>
                    <video width='750' height='500' autoPlay muted loop>
                        <source src={videoHomePage} type='video/mp4' />
                    </video>
                </div>
            </div>
            <MovieList allMovie={allMovie} />
        </div>
    )
}

export default Home;