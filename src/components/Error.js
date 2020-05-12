import React, { Component } from 'react'
import "@lottiefiles/lottie-player";
import './styles/Error.css'

export class Error extends Component {
    render() {
        return (
                <div className="Error">
                    <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_hXHdlx.json"
                    background="transparent"  
                    speed="0.5"   
                    autoplay
                    >
                    </lottie-player>
                </div>
        )
    }
}

export default Error
