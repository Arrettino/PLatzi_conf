import React from 'react'
import {Link} from 'react-router-dom'
//components
import BadgesList from '../components/BadgesList'
import Loading from '../components/Loading'
import Error from '../components/Error'
//styles
import './styles/Badges.css'
//images
import hero from '../images/badge-header.svg'
//rce para esqueleto de nueva pagina / componente
function Badges(props){

        if (props.loading === true && !props.data){
          return(<Loading/>)
        }
        if (props.error){
          return(<Error/>)
        }
        return (
            <React.Fragment>
                <div className="badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img src={hero} alt="hero" className='Badges_conf-logo'/>
                        </div>
                    </div>
                </div>
                    <div className='Container'>
                        <div className='List__container'>
                            <div className="Badges__buttons">
                                <Link to="/badges/new" className='btn btn-primary'>
                                    New Badges
                                </Link>
                            </div>
                            <div className="Badges__container">
                              <BadgesList badges={props.data}/>   
                            </div>
                        </div>
                    </div>
                </React.Fragment>
        )
    }


export default Badges
