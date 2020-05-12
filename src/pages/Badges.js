import React from 'react'
import {Link} from 'react-router-dom'
//components
import BadgesList from '../components/BadgesList'
import Loading from '../components/Loading'
import Error from '../components/Error'
//styles
import './styles/Badges.css'
//images
import hero from '../images/badge-header.svg'
import api from '../api'
//rce para esqueleto de nueva pagina / componente
export class Badges extends React.Component {
        state = {
          data: undefined,
          error:null,
          loading:true,

        }

        componentDidMount(){
          this.fetchData()
        }

        fetchData= async () => {
          this.setState({loading:true,error:null})
          
          try{
            const data = await api.badges.list()
            this.setState({loading:false,data:data})
          }catch(error){
            this.setState({loading:false,error:error})
          }
        }

      render() {
        if (this.state.loading === true){
          return(
          <React.Fragment>
            <Loading/>
          </React.Fragment>)
        }
        if (this.state.error){
          return(
            <React.Fragment>
              <Error/>
            </React.Fragment>
          )
        }
        return (
            <React.Fragment>
                <div className="badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img src={hero} alt="hero" className='Badges_conf-logo'/>
                        </div>
                    </div>
                </div>
                    <div className='Conteiner'>
                        <div className='List__container'>
                            <div className="Badges__buttons">
                                <Link to="/badges/new" className='btn btn-primary'>
                                    New Badges
                                </Link>
                            </div>
                            <div className="Badges__container">
                            <BadgesList badges={this.state.data} />   
                            </div>
                        </div>
                    </div>
                </React.Fragment>
        )
    }
}

export default Badges
