import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    console.log(this.props);
    return (
      <div data-testid="planet-card">
        <img
          className="planetImage"
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
        <p className="planetName" data-testid="planet-name">{ planetName }</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};

export default PlanetCard;
