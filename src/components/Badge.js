import React from 'react'
import './styles/Badge.css'
import ConfLogo from '../images/badge-header.svg'



class Badge extends React.Component {
    render(){
        return (
        <div className="Badge">
            <div className="Badge__header">
                <img src={ConfLogo} alt="Logo de la conferencia"/>
            </div>
            <div className="Badge__section-name">
                <img className="Badge__avatar" src={this.props.avatar} alt="Avatar"/>
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
        )
    }
}

export default Badge 