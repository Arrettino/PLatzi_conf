import React, { Component } from "react";
import Badges from "./Badges";
import api from "../api";

export class BadgesContainer extends Component {
  state = {
    data: undefined,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    await this.fetchData();
    if (!this.state.error) {
      this.intervalId = setInterval(this.fetchData, 5000);
    }
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      clearInterval(this.intervalId);
      this.setState({ loading: false, error: error });
    }
  };

  filter = (e) => {
    this.setState({ filter: e });
  };
  render() {
    return (
      <Badges
        loading={this.state.loading}
        error={this.state.error}
        data={this.state.data}
      />
    );
  }
}

export default BadgesContainer;
