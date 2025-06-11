import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
// import image from '../../assets/Screenshot 2025-05-16 214547.png';
import Paginations from '../pagination/Paginations.jsx';
import { useEffect, useState } from 'react';
import { ApiPhimBo, ApiPhimLe, ApiPhimHoatHinh, ApiTheLoai, ApiQuocGia } from '../../api/Axios.jsx'
import Pagination from '../pagination/Paginations.jsx';

const MovieList = (props) => {
    const [data, setData] = useState({})
    const [allData, setAllData] = useState({})
    const navigate = useNavigate()
    let location = useLocation()
    let [searchParams] = useSearchParams('')

    const key = location.pathname;

    const keyword = searchParams.get('keyword')

    const handleDetail = (slug) => {
        navigate(`/detail/${slug}`)
    }

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
            else if (key === '/tim-kiem') {
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
    // console.log(location)
    // console.log(key)
    console.log('data: ', data)
    // console.log('allData: ', allData)
    return (
        <div className="movie-list container">
            {
                key === '/' ?
                    <div>
                        <h3 className='btn btn-success mt-2'>Danh sách phim lẻ &gt;&gt;&gt;</h3>
                        <div className="row">
                            {

                                allData && allData?.phimLe?.data && allData?.phimLe?.data?.items?.slice(0, 8).map((item, index) => {
                                    return (
                                        <div className="divImg col-6 col-sm-6 col-md-3 col-xl-3" key={index} onClick={() => handleDetail(item.slug)}>
                                            <img src={`https://phimimg.com/${item.poster_url}`} className="img-rounded" />
                                            <div className="year-mv btn btn-primary">{item.year}</div>
                                            <div className="hd btn btn-warning">{item.quality}</div>
                                            <div className="name-mv text-white">{item.name}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <h3 className='btn btn-success mt-2'>Danh sách phim bộ &gt;&gt;&gt;</h3>
                        <div className="row">
                            {
                                allData && allData?.phimBo?.data && allData?.phimBo?.data?.items?.slice(0, 8).map((item, index) => {
                                    return (
                                        <div className="divImg col-6 col-sm-6 col-md-3 col-xl-3" key={index} onClick={() => handleDetail(item.slug)}>
                                            <img src={`https://phimimg.com/${item.poster_url}`} className="img-rounded" />
                                            <div className="year-mv btn btn-primary">{item.year}</div>
                                            <div className="hd btn btn-warning">{item.quality}</div>
                                            <div className="name-mv text-white">{item.name}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <h3 className='btn btn-success mt-2'>Danh sách phim hoạt hình &gt;&gt;&gt;</h3>
                        <div className="row">
                            {
                                allData && allData?.phimHoatHinh?.data && allData?.phimHoatHinh?.data?.items?.slice(0, 8).map((item, index) => {
                                    return (
                                        <div className="divImg col-6 col-sm-6 col-md-3 col-xl-3" key={index} onClick={() => handleDetail(item.slug)}>
                                            <img src={`https://phimimg.com/${item.poster_url}`} className="img-rounded" />
                                            <div className="year-mv btn btn-primary">{item.year}</div>
                                            <div className="hd btn btn-warning">{item.quality}</div>
                                            <div className="name-mv text-white">{item.name}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    :
                    key === '/tim-kiem' ?
                        <div>
                            <div className="row">
                                <h4 className="mt-5">Kết quả tìm kiếm cho: <span style={{ color: 'red' }}>{keyword}</span></h4>
                                {
                                    data?.data?.items && data?.data?.items?.slice(0, 12).map((item, index) => {
                                        return (
                                            <div className="divImg col-6 col-sm-6 col-md-3 col-xl-3" key={index} onClick={() => handleDetail(item.slug)}>
                                                <img src={`${data.data.APP_DOMAIN_CDN_IMAGE}/${item.poster_url}`} className="img-rounded" />
                                                <div className="year-mv btn btn-primary">{item.year}</div>
                                                <div className="hd btn btn-warning">{item.quality}</div>
                                                <div className="name-mv text-white">{item.name}</div>
                                            </div>

                                        )
                                    })
                                }
                            </div>
                        </div>
                        :
                        <div>
                            <h3 className='btn btn-success mt-2'>{key === '/phim-le' ? 'Danh sách phim lẻ' : key === '/phim-bo' ? 'Danh sách phim bộ' : key === '/phim-hoat-hinh' ? 'Danh sách phim hoạt hình' : `Danh sách phim ${data?.data?.breadCrumb[0]?.name}`} &gt;&gt;&gt;</h3>
                            <div className="row">
                                {
                                    data && data?.data?.items && data?.data?.items.slice(0, 8).map((item, index) => {
                                        return (
                                            <div className="divImg col-6 col-sm-6 col-md-3 col-xl-3" key={index} onClick={() => handleDetail(item.slug)}>
                                                <img src={`${data.data.APP_DOMAIN_CDN_IMAGE}/${item.poster_url}`} className="img-rounded" />
                                                <div className="year-mv btn btn-primary">{item.year}</div>
                                                <div className="hd btn btn-warning">{item.quality}</div>
                                                <div className="name-mv text-white">{item.name}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
            }

        </div>
    )
}

export default MovieList;