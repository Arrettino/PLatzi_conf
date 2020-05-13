import React from 'react'
import api from '../api'
import md5 from 'md5'
import {Redirect,Link} from 'react-router-dom'
//components
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import Loading from '../components/Loading'
import Error from '../components/Error'
//styles
import './styles/BadgeEdit.css'
//images
import header from '../images/platziconf-logo.svg'


class BadgeEdit extends React.Component{
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
    render(){
        if (this.state.loading === true){
            return(<Loading/>)
        }
        if (this.state.error){
            return(<Error/>)
        }
        if (this.state.redirec === true){
            return(<Redirect to='/badges'/>)
        }
        return(
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit__hero-image" src={header} alt=""/>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <Badge 
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName} 
                                email={this.state.form.email}
                                instagram={this.state.form.instagram}  
                                jobTitle={this.state.form.jobTitle}
                                avatarUrl={this.state.form.avatarUrl}
                            />
                            {/* esto es un comentario*/}
                        </div>
                        <div className='col-6'>
                            <h1>Edit Attendant</h1>
                            <BadgeForm 
                                onChange={this.handleChange} 
                                formValues={this.state.form}
                                onSubmit={this.handleSubmit}
                            />
                        </div>
                    </div> 
                </div>
            </React.Fragment>
        )
}
}

export default BadgeEdit