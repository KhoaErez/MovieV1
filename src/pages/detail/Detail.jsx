import { useParams } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { ApiMovie } from '../../api/Axios.jsx'
import Iframe from 'react-iframe'
import './Detail.scss'
import Paginations from '../../components/pagination/Paginations.jsx'

const Detail = () => {
    const [data, setData] = useState()
    const [urlVideo, setUrlVideo] = useState('')
    const [serverName, setServerName] = useState()
    const videoRef = useRef(null);
    let param = useParams()

    const sortEpisodesDesc = (episodes) => {
        return episodes?.map(episode => {
            const sortedData = [...episode.server_data].sort((a, b) => {
                const getEpNum = (str) => parseInt(str?.match(/\d+/)?.[0] || 0)
                return getEpNum(b.name) - getEpNum(a.name)
            })
            return { ...episode, server_data: sortedData }
        })
    }

    const sortedEpisodes = sortEpisodesDesc(data?.episodes)

    useEffect(() => {
        const fetchData = async () => {
            const api = await ApiMovie({ slug: param.id })
            setData(api)
        }
        fetchData()
    }, [param])

    console.log(param)
    console.log('data detail: ', data)
    return (
        <div className="container my-5">
            <div className="detail-movie">
                <div className="image-movie">
                    <img src={data?.movie?.thumb_url} alt="3" />
                    <div className="title p-4 text-secondary">
                        <h2 className='text-white'>{data?.movie?.name}</h2>
                        <div>
                            <div className="btn btn-danger me-1" onClick={() => {
                                setTimeout(() => {
                                    videoRef.current?.scrollIntoView({ behavior: 'smooth' });
                                }, 100);
                            }}>
                                <i className="fa-solid fa-play"></i> Xem ngay
                            </div>
                            <div className="btn btn-warning me-1">{data?.movie?.quality}</div>
                            <div className="btn btn-secondary me-1">{data?.movie?.lang}</div>
                            <div className="btn btn-primary me-1">{data?.movie?.year}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div>
                    <label className="mt-3">Nội dung: </label>
                    <p>
                        {data?.movie?.content}
                    </p>

                    <p><span>Quốc gia: </span>{data?.movie?.country[0]?.name || 'Đang cập nhật'}</p>
                    <p><span>Tình trạng: </span>{data?.movie?.episode_total} tập</p>
                    <p><span>Thời gian: </span>{data?.movie?.time}</p>
                    <p><span>Đạo diễn: </span>{data?.movie?.director.join(', ')}</p>
                    <p>
                        <span>Diễn viên: </span>{data?.movie?.actor.join(', ')}
                    </p>
                    <p><span>Thể loại: </span>
                        {data?.movie?.category?.map(item => item.name).join(', ')}
                    </p>
                </div>
            </div>

            <div className="mt-5">
                <div className='mb-2'>

                    {data?.episodes?.slice(0, 2).map((episode, index) => (
                        <button key={index} className='btn btn-primary me-2' onClick={() => { setServerName(episode?.server_name), setUrlVideo(episode?.server_data[0]?.link_embed) }}>
                            {episode?.server_name}
                        </button>
                    ))}

                </div>
                <div className='play-video' ref={videoRef}>
                    {urlVideo ? (
                        <div className="video-wrapper">
                            <Iframe
                                url={urlVideo}
                                width="100%"
                                height="100%"
                                className="iframe-video"
                                display="block"
                                position="relative"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            />
                        </div>
                    ) : (
                        <div className="video-wrapper no-video">
                            <div className="no-video-text">
                                Vui lòng chọn VietSub hoặc Thuyết Minh
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    {urlVideo ?
                        <div className='my-2 flex-wrap container mx-2'>
                            {
                                (data?.episodes?.flatMap((item) => item?.server_data || [])?.length || 0) >= 29 ?
                                    <div>
                                        {
                                            sortedEpisodes?.filter(ep => ep.server_name === serverName).map((episode) => (
                                                episode.server_data.map((item, index) => {
                                                    const isActive = urlVideo === item?.link_embed;
                                                    return (
                                                        <button
                                                            key={item.name}
                                                            className={`btn me-1 mb-2 cursor-pointer ${isActive ? 'btn-warning' : 'btn-primary'} `}
                                                            onClick={() => {
                                                                setTimeout(() => {
                                                                    videoRef.current?.scrollIntoView({ behavior: 'smooth' });
                                                                }, 100)
                                                                setUrlVideo(item?.link_embed)
                                                            }
                                                            }
                                                        >
                                                            {item?.name || `Tập ${index + 1}`}
                                                        </button>
                                                    )
                                                })
                                            ))
                                        }
                                    </div> :
                                    <div>
                                        {
                                            data?.episodes?.filter(ep => ep.server_name === serverName).map((episode) => (
                                                episode.server_data.map((item, index) => {
                                                    const isActive = urlVideo === item?.link_embed;
                                                    return (
                                                        <button
                                                            key={item.name}
                                                            className={`btn me-1 mb-2 cursor-pointer ${isActive ? 'btn-warning' : 'btn-primary'} `}
                                                            onClick={() => {
                                                                setTimeout(() => {
                                                                    videoRef.current?.scrollIntoView({ behavior: 'smooth' });
                                                                }, 100)
                                                                setUrlVideo(item?.link_embed)
                                                            }}
                                                        >
                                                            {item?.name || `Tập ${index + 1}`}
                                                        </button>
                                                    )
                                                })
                                            ))
                                        }
                                    </div>
                            }
                        </div> : ''}

                </div>
            </div>
        </div>
    )
}

export default Detail