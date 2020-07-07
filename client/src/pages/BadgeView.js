import React from 'react'
import {Link} from 'react-router-dom'
//components
import Badge from '../components/Badge'
import Loading from '../components/Loading'
import Error from '../components/Error'
import DeleteBadgeModal from '../components/DeleteBadgeModal'
//styles
import './styles/BadgeView.css'
//images
import header from '../images/platziconf-logo.svg'



function BadgeView(props){

        if (props.loading === true){
            return(<Loading/>)
        }
        if (props.error){

            return(<Error/>)
        }
        return(
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit__hero-image" src={header} alt=""/>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <Badge 
                                firstName={props.firstName}
                                lastName={props.lastName} 
                                email={props.email}
                                instagram={props.instagram}  
                                jobTitle={props.jobTitle}
                                avatarUrl={props.avatarUrl}
                            />
                            <div className="Badges__button">
                                <Link to="/badges" className='btn btn-primary'>
                                    Badges List
                                </Link>
                            </div>
                            {/* esto es un comentario*/}
                        </div>
                        <div className='col-6'>
                            <div className="container__options">
                                <div className="options">
                                    <h2>Actions:</h2>
                                        <Link to={`/badge/${props.BadgeId}/edit`} className="btn btn-primary mb-4">
                                                Edit
                                        </Link>
                                    <div>
                                        <button onClick={props.activate_isOpen} className="btn btn-danger">Delete</button>
                                        <DeleteBadgeModal onDeleteBadge={props.onDeleteBadge} onClose={props.onClose} isOpen={props.isOpen}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </React.Fragment>
        )
}


export default BadgeView