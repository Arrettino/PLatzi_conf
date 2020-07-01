import React, { Component } from "react";

export class BadgeForm extends Component {
  //state={}

  // handleClick= e =>{
  //   console.log("button has clicked")
  // console.log(this.state)
  //}
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              onChange={this.props.onChange}
              value={this.props.formValues.firstName}
            />
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              onChange={this.props.onChange}
              value={this.props.formValues.lastName}
            />
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={this.props.onChange}
              value={this.props.formValues.email}
            />
            <label>Job Title</label>
            <input
              type="text"
              className="form-control"
              name="jobTitle"
              onChange={this.props.onChange}
              value={this.props.formValues.jobTitle}
            />
            <label>Instagram</label>
            <input
              type="text"
              className="form-control"
              name="instagram"
              onChange={this.props.onChange}
              value={this.props.formValues.instagram}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default BadgeForm;
