import React, { Component } from 'react'
import api from '../api'
import BadgeView from './BadgeView';

export class BadgeViewContainer extends Component {
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
        isOpen:false,    
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
    activate_isOpen= e =>this.setState({isOpen:true})
    onClose= e=>this.setState({isOpen:false})

    onDeleteBadge= async e=>{
        this.setState({loading:true,error:null})
        try{
            await api.badges.remove(this.props.match.params.BadgeId)
            this.setState({loading:false})
            this.props.history.push('/badges')

        }catch(error){
            this.setState({loading:false,error:error})
        }
    }
    render() {
        return (
            <BadgeView
                loading={this.state.loading}
                error={this.state.error}
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName} 
                email={this.state.form.email}
                instagram={this.state.form.instagram}  
                jobTitle={this.state.form.jobTitle}
                avatarUrl={this.state.form.avatarUrl}
                activate_isOpen={this.activate_isOpen}
                onDeleteBadge={this.onDeleteBadge}
                onClose={this.onClose}
                isOpen={this.state.isOpen}
                BadgeId={this.props.match.params.BadgeId}

            />
        )
    }
}

export default BadgeViewContainer
