import videoHomePage from '../assets/3.mp4';

const Home = () => {
    return (
        <div className="homepage-container">
            <video width='750' height='500' autoPlay muted loop>
                <source src={videoHomePage} type='video/mp4' />
            </video>
            <div className='homepage-content'>
                <div className='titlle-1'>Trần Doãn Khoa</div>
                <div className='titlle-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius excepturi nam laboriosam ducimus sit, quaerat sed accusamus placeat hic est voluptatem amet repellendus soluta. Quidem ab repudiandae veniam alias odio...</div>
                <div className='titlle-3'>
                    <button>Xem thêm</button>
                </div>
            </div>
        </div>
    )
}

export default Home;