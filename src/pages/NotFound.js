import React, { Component } from 'react'
import "@lottiefiles/lottie-player";
import './styles/NotFound.css'

function NotFound(){
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


export default NotFound
