import videoHomePage from '../assets/3.mp4';
import MovieList from '../components/movie-list/MovieList';
const Home = () => {
    return (
        <div className="homepage-container">
            <div className='row homepage-title'>
                <div className='homepage-title-content col-sm-12 col-md-6'>
                    <div className='titlle-1'>Trần Doãn Khoa</div>
                    <div className='titlle-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius excepturi nam laboriosam ducimus sit, quaerat sed accusamus placeat hic est voluptatem amet repellendus soluta. Quidem ab repudiandae veniam alias odio...</div>
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
            <MovieList />
        </div>
    )
}

export default Home;