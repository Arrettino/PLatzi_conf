import React, { Component } from 'react'
import api from '../api'
import md5 from 'md5'
import BadgeEdit from './BadgeEdit'

export class BadgeEditContainer extends Component {
    state = { 
        form:{
            firstName:'',
            lastName:'',
            email:'',
            jobTitle:'',
            instagram:'',
            avatarUrl:'http://www.gravatar.com/avatar/?d=identicon',},
        loading:true,
        error:null,
    };
    
    componentDidMount(){
        this.fetchData()
    }
    
    fetchData= async e=>{
        this.setState({loading:true,error:null})

        try{
            const data = await api.badges.read(this.props.match.params.BadgeId)
            this.setState({loading:false, form:data})
        }
        catch(error){
            this.setState({loading:false,error:error})
        }

    }
    
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
        await api.badges.update(this.props.match.params.BadgeId,this.state.form)
        this.setState({loading:false})
        this.props.history.push('/badges')
        }
        catch(error){
            this.setState({loading:false ,error:error})
        }

    }
    render() {
        return (
            <BadgeEdit
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
                BadgeId={this.props.match.params.BadgeId}
            />
        )
    }
}

export default BadgeEditContainer
