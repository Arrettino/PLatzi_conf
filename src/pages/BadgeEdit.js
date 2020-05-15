import React from 'react'
import {Link} from 'react-router-dom'
//components
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import Loading from '../components/Loading'
import Error from '../components/Error'
//styles
import './styles/BadgeEdit.css'
//images
import header from '../images/platziconf-logo.svg'


function BadgeEdit(props){
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
                            <Link to={`/Badges/${props.BadgeId}`} className='btn btn-primary'>
                                Return Badge
                            </Link>
                        </div>
                        {/* esto es un comentario*/}
                    </div>
                    <div className='col-6'>
                        <h1>Edit Attendant</h1>
                        <BadgeForm 
                            onChange={props.onChange} 
                            formValues={props.formValues}
                            onSubmit={props.onSubmit}
                        />
                    </div>
                </div> 
            </div>
        </React.Fragment>
        )
}


export default BadgeEdit