import { useLocation, useSearchParams } from 'react-router-dom';
// import image from '../../assets/Screenshot 2025-05-16 214547.png';
import Paginations from '../pagination/Paginations.jsx';
import { useEffect, useState } from 'react';
import { ApiPhimBo, ApiPhimLe, ApiPhimHoatHinh, ApiTheLoai, ApiQuocGia } from '../../api/Axios.jsx'
import Pagination from '../pagination/Paginations.jsx';

const MovieList = (props) => {
    let location = useLocation()
    let [searchParams] = useSearchParams('')
    const keyword = searchParams.get('keyword')
    const key = location.pathname;
    const [data, setData] = useState({})
    const [allData, setAllData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            if (key === '/') {
                const all = {
                    phimLe: await props.allMovie['phimLe'],
                    phimBo: await props.allMovie['phimBo'],
                    phimHoatHinh: await props.allMovie['phimHoatHinh']
                }
                setAllData(all)
            }
            else if (key === '/search') {
                const search = await props.searchMovies
                setData(search)
            }
            else {
                let result = null
                if (key === '/phim-bo')
                    result = await props.phimBo
                else if (key === '/phim-le')
                    result = await props.phimLe
                else if (key === '/phim-hoat-hinh')
                    result = await props.phimHoatHinh
                else if (key === '/search')
                    result = await props.searchMovies
                else if (key.startsWith('/the-loai'))
                    result = await props.categoryMovies
                else if (key.startsWith('/quoc-gia'))
                    result = await props.countryMovies

                if (result)
                    setData(result);
            }
        }
        fetchData()
    }, [key, props]);
    console.log(location)
    // console.log(key)
    console.log(data)
    return (
        <div className="movie-list container">
            {
                key === '/' ?
                    <div>
                        <h3 className='btn btn-success mt-2'>Danh sách phim lẻ &gt;&gt;&gt;</h3>
                        <div className="row">
                            {

                                allData && allData.phimLe && allData.phimLe.items.slice(0, 8).map((item, index) => {
                                    return (
                                        <div className="divImg col-6 col-sm-6 col-md-3 col-xl-3" key={index}>
                                            <img src={item.thumb_url} className="img-rounded" />
                                            <div className="currentMV btn btn-primary">{item.current_episode}</div>
                                            <div className="hd btn btn-warning">{item.quality}</div>
                                            <div className="nameMV text-white">{item.name}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <h3 className='btn btn-success mt-2'>Danh sách phim bộ &gt;&gt;&gt;</h3>
                        <div className="row">
                            {
                                allData && allData.phimBo && allData.phimLe.items.slice(0, 8).map((item, index) => {
                                    return (
                                        <div className="divImg col-6 col-sm-6 col-md-3 col-xl-3" key={index}>
                                            <img src={item.thumb_url} className="img-rounded" />
                                            <div className="currentMV btn btn-primary">{item.current_episode}</div>
                                            <div className="hd btn btn-warning">{item.quality}</div>
                                            <div className="nameMV text-white">{item.name}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <h3 className='btn btn-success mt-2'>Danh sách phim hoạt hình &gt;&gt;&gt;</h3>
                        <div className="row">
                            {
                                allData && allData.phimHoatHinh && allData.phimHoatHinh.items.slice(0, 8).map((item, index) => {
                                    return (
                                        <div className="divImg col-6 col-sm-6 col-md-3 col-xl-3" key={index}>
                                            <img src={item.thumb_url} className="img-rounded" />
                                            <div className="currentMV btn btn-primary">{item.current_episode}</div>
                                            <div className="hd btn btn-warning">{item.quality}</div>
                                            <div className="nameMV text-white">{item.name}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    :
                    key === '/search' ?
                        <div>
                            <div className="row">
                                <h4 className="mt-5">Kết quả tìm kiếm cho: <span style={{ color: 'red' }}>{keyword}</span></h4>
                                {
                                    data && data.items && data.items.slice(0, 8).map((item, index) => {
                                        return (
                                            <div className="divImg col-6 col-sm-6 col-md-3 col-xl-3" key={index}>
                                                <img src={item.thumb_url} className="img-rounded" />
                                                <div className="currentMV btn btn-primary">{item.current_episode}</div>
                                                <div className="hd btn btn-warning">{item.quality}</div>
                                                <div className="nameMV text-white">{item.name}</div>
                                            </div>

                                        )
                                    })
                                }
                            </div>
                        </div>
                        :
                        <div>
                            <h3 className='btn btn-success mt-2'>{key === '/phim-le' ? 'Danh sách phim lẻ' : key === '/phim-bo' ? 'Danh sách phim bộ' : key === '/phim-hoat-hinh' ? 'Danh sách phim hoạt hình' : `Danh sách phim ${data?.cat?.title}`} &gt;&gt;&gt;</h3>
                            <div className="row">
                                {
                                    data && data.items && data.items.slice(0, 8).map((item, index) => {
                                        return (
                                            <div className="divImg col-6 col-sm-6 col-md-3 col-xl-3" key={index}>
                                                <img src={item.thumb_url} className="img-rounded" />
                                                <div className="currentMV btn btn-primary">{item.current_episode}</div>
                                                <div className="hd btn btn-warning">{item.quality}</div>
                                                <div className="nameMV text-white">{item.name}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
            }

            <Pagination />

        </div>
    )
}

export default MovieList;