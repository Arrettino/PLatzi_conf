import React,{Component} from 'react'
import './styles/Badge.css'
import ConfLogo from '../images/badge-header.svg'
import instaLogo from '../images/instaLogo.svg' 


class Badge extends Component {
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
                        <p><img src={instaLogo} height="25px" alt="instagram logo"/> @{this.props.instagram}</p>
                    </div>
                    <div className="Badge__footer">
                        <p>platziconf</p>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Badge 