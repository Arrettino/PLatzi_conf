import React, { Component } from 'react'
import './styles/BadgesList.css'
import { Link } from 'react-router-dom';
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
              <br />@{this.props.badge.instagram}
              <br />
              {this.props.badge.jobTitle}
            </div>
          </div>
        );
      }
    }
    
    class BadgesList extends React.Component {
      render() {
        if (this.props.badges.length === 0){
          return(
            <div className="box">
              <p>Not found Badges</p>
              
            </div>
          )
        }
        return (
          <div className="BadgesList">
            <ul className="list-unstyled">
              {this.props.badges.map(badge => {
                return (
                  <li key={badge.id}>
                    <Link to={`/Badges/${badge.id}/edit`}>
                      <BadgesListItem badge={badge} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }
    }
    
    export default BadgesList;
