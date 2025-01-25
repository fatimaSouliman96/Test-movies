import { TbArrowWaveRightUp } from 'react-icons/tb'
import BasicPie from '../../components/chart/Chart'
import StarsRating from '../../components/rating/StarsRating'
import './details.css'
import { useLocation, useNavigate } from 'react-router-dom'


export default function Details() {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <div className="detail-page" >
             <TbArrowWaveRightUp size={40} onClick={() => navigate("/movies")} />
            <div className="detail">
                <div className='left'>
                    <div className='top'>
                        <h1>{location.state.data.name}</h1>
                        <p>{location.state.data.year}</p>
                        <StarsRating rating={location.state.data.rating} />
                    </div>
                    <p>{location.state.data.summary}</p>
                    <ul className='info' >
                        <li>Director:<p>{location.state.data.director}</p></li>
                        <li>Display Duration:<p>{location.state.data.hours} h {location.state.data.minutes} m</p></li>
                        <li>Actros:<p>{location.state.data.actors}</p></li>
                    </ul>
                    <BasicPie />
                </div>
                <div className='right'>
                    <div className='image'>
                        <div className='black' ></div>
                        <img src={location.state.data.poster} />
                    </div>


                </div>
            </div>

        </div>
    )
}
