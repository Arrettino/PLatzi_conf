import React, { Component } from 'react'
import "@lottiefiles/lottie-player";
import './styles/NotFound.css'

export class NotFound extends Component {
    render() {
        return (
            
            <div className="notFound">
                    <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_yN8pO6.json"
                    background="transparent"  
                    speed="1"   
                    autoplay
                    >
                    </lottie-player>
                <p>Page Not Found</p>
            </div>
        )
    }
}

export default NotFound
