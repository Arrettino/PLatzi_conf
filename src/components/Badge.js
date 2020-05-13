import React from 'react'
import {Link} from 'react-router-dom'
import './styles/Badge.css'
import ConfLogo from '../images/badge-header.svg'


class Badge extends React.Component {
    render(){
        return (
            <React.Fragment>
                <div className="Badge">
                    <div className="Badge__header">
                        <img src={ConfLogo} alt="Logo de la conferencia"/>
                    </div>
                    <div className="Badge__section-name">
                        <img src={this.props.avatarUrl} className="Badge__avatar" alt="Avatar"/>
                        <h1>{this.props.firstName}<br/>{this.props.lastName}</h1>
                    </div>

                    <div className="Badge__section-info">
                        <p>{this.props.jobTitle}</p>
                        <p>@{this.props.instagram}</p>
                    </div>
                    <div className="Badge__footer">
                        <p>platziconf</p>
                    </div>
                </div>
                <div className="Badges__button">
                        <Link to="/badges" className='btn btn-primary'>
                            View Badges
                        </Link>
                    </div>
            </React.Fragment>
        )
    }
}

export default Badge 