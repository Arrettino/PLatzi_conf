import React from 'react'
import api from '../api'
import md5 from 'md5'
import {Link} from 'react-router-dom'
//components
import Badge from '../components/Badge'
import Loading from '../components/Loading'
import Error from '../components/Error'
import DeleteBadgeModal from '../components/DeleteBadgeModal'
//styles
import './styles/BadgeView.css'
//images
import header from '../images/platziconf-logo.svg'



class BadgeView extends React.Component{
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
            const data=await api.badges.remove(this.props.match.params.BadgeId)
            this.setState({loading:false})
            this.props.history.push('/badges')

        }catch(error){
            this.setState({loading:false,error:error})
        }
    }

    render(){
        if (this.state.loading === true){
            return(<Loading/>)
        }
        if (this.state.error){

            return(<Error/>)
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
                            <div className="Badges__button">
                                <Link to="/badges" className='btn btn-primary'>
                                    Badges List
                                </Link>
                            </div>
                            {/* esto es un comentario*/}
                        </div>
                        <div className='col-6'>
                            <div className="container__options">
                                <div className="options">
                                    <h2>Actions:</h2>
                                        <Link to={`/Badges/${this.props.match.params.BadgeId}/edit`} className="btn btn-primary mb-4">
                                                Edit
                                        </Link>
                                    <div>
                                        <button onClick={this.activate_isOpen} className="btn btn-danger">Delete</button>
                                        <DeleteBadgeModal onDeleteBadge={this.onDeleteBadge} onClose={this.onClose} isOpen={this.state.isOpen}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </React.Fragment>
        )
}
}

export default BadgeView