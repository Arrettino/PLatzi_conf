import React from 'react'
//components
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
//styles
import './styles/BadgeNew.css'
//images
import header from '../images/badge-header.svg'
import avatar from '../images/avatar.png'

class BadgeNew extends React.Component{
    state = { form:{
        firstName:'',
        lastName:'',
        email:'',
        jobTitle:'',
        instagram:'',
    } };
    handleChange = e => {
        //const nextForm = this.state.from;
        //nextForm[e.target.name] = e.target.value;
        this.setState({
            form: { //=nextForm
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        })
    }
    render(){
        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt=""/>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <Badge 
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName} 
                                avatar={avatar} 
                                instagram={this.state.form.instagram}  
                                jobTitle={this.state.form.jobTitle}
                            />
                            {/* esto es un comentario*/}
                        </div>
                        <div className='col-6'>
                            <BadgeForm 
                                onChange={this.handleChange} 
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
}
}

export default BadgeNew