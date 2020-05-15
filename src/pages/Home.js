import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './styles/Home.css'
import Hero from '../images/astronauts.svg'
import Title  from '../images/platziconf-logo.svg'


function Home() {
    return (
        <div className="Back__ground">
            <div className='col-4 Start'>
                <img src={Title} alt="Title" className='Title'/>
                <h1>Print your Badge</h1>
                <p>The easiest way to manage your conference</p>
                <div className="Badges__buttons">
                    <Link to="/badges" className='btn btn-primary'>
                        Start Now
                    </Link>
                </div>
            </div>
            <div className='col-8'>
                <img src={Hero} alt="Logo hero" className='Logo__hero'/>
            </div>
        </div>
    )
}

export default Home
