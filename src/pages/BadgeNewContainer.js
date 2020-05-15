import React, { Component } from 'react'
import BadgeNew from './BadgeNew'
import api from '../api'
import md5 from 'md5'

export class BadgeNewContainer extends Component {
    state = { 
        form:{
            firstName:'',
            lastName:'',
            email:'',
            jobTitle:'',
            instagram:'',
            avatarUrl:'http://www.gravatar.com/avatar/?d=identicon',},
        loading:false,
        error:null,
        };
    handleChange = e => {
        //const nextForm = this.state.from;
        //nextForm[e.target.name] = e.target.value;
        this.setState({
            form: { //=nextForm
                ...this.state.form,
                [e.target.name]: e.target.value,
                avatarUrl:`http://www.gravatar.com/avatar/${md5(this.state.form.email)}?d=identicon`
            },
        })
    }

    handleSubmit= async e =>{
        e.preventDefault()
        this.setState({loading:true,error:null, redirec:false})
        try{
        await api.badges.create(this.state.form)
        this.setState({loading:false})
        this.props.history.push('/badges')
        }
        catch(error){
            this.setState({loading:false ,error:error})
        }

    }

    render() {
        return (
            <BadgeNew
                loading={this.state.loading}
                error={this.state.error}
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName} 
                email={this.state.form.email}
                instagram={this.state.form.instagram}  
                jobTitle={this.state.form.jobTitle}
                avatarUrl={this.state.form.avatarUrl}
                onChange={this.handleChange} 
                formValues={this.state.form}
                onSubmit={this.handleSubmit}
            />
        )
    }
}

export default BadgeNewContainer
