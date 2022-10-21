import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <p data-testid="mission-name">{name}</p>
        <p data-testid="mission-year" className="mission-info">
          <i className="uil uil-calender icon" />
          {year}
        </p>
        <p data-testid="mission-country" className="mission-info">
          <i className="uil uil-map-marker icon" />
          {country}
        </p>
        <p data-testid="mission-destination" className="mission-info">
          <i className="uil uil-compass icon" />
          {destination}
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
