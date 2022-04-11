import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <section className="planetCardContainer">
        <div className="planetContainer" data-testid="solar-system">
          <Title headline="Planetas" />
        </div>
        <div className="planetCard">
          {planets.map((value) => (<PlanetCard
            key={ value.name }
            planetName={ value.name }
            planetImage={ value.image }
          />))}
        </div>
      </section>
    );
  }
}

export default SolarSystem;
