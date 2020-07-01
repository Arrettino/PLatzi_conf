import React from 'react'
import "@lottiefiles/lottie-player";
import './styles/Loading.css'


const Loading = () => {
    return (
    <React.Fragment>
                <div className="loading">
                    <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_m2SaRK.json"
                    background="transparent"  
                    speed="1"   
                    loop autoplay
                    >
                    </lottie-player>
                </div>
    </React.Fragment>
    )    
}
export default Loading;
