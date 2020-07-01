import React, { Component } from 'react'
import './styles/BadgesList.css'
import { Link } from 'react-router-dom';
import instaLogo from '../images/instaLogo.svg' 
export class BadgesListItem extends Component {
    render() {
        return (
          <div className="BadgesListItem">
            <img
              className="BadgesListItem__avatar"
              src={this.props.badge.avatarUrl}
              alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
            />
            <div>
              <strong>
                {this.props.badge.firstName} {this.props.badge.lastName}
              </strong>
              <br /><img src={instaLogo} height="20px" alt="instagram logo"/> @{this.props.badge.instagram}
              <br />
              {this.props.badge.jobTitle}
            </div>
          </div>
        );
      }
    }
    
    function useSearchBadges(badges){
      const [query, setQuery] = React.useState('')
      const [filteredBadges, setFilteredBadges] = React.useState(badges)
    
       React.useMemo(
        () =>{
          const result = badges.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
      })
    
      setFilteredBadges(result)
    }, [ badges, query ]);
    
      return { query, setQuery, filteredBadges}
    }
    
    function BadgesList (props) {
      const { query, setQuery, filteredBadges } = useSearchBadges(props.badges)
        if (props.badges.length === 0){
          return(
            <div className="box">
              <p>Not found Badges</p>
              
            </div>
          )
        }
        return (
          
          <div className="BadgesList">
            <div className="form-group">
              <label>Filter Badges</label>
              <input 
              value={query}
              type="text" 
              className="form-control"
              onChange={(e)=>{
                setQuery(e.target.value)
              }}
              />
            </div>
            <ul className="list-unstyled">
              {filteredBadges.map(badge => {
                return (
                  <li key={badge.id}>
                    <Link to={`/Badges/${badge.id}`}>
                      <BadgesListItem badge={badge} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }
    
    export default BadgesList;
