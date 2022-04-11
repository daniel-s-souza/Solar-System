import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <section>
        <div data-testid="missions">
          <Title headline="Missões" />
        </div>
        <div className="missionCard">
          {missions.map((value) => (
            <MissionCard
              key={ value.name }
              name={ value.name }
              year={ value.year }
              country={ value.country }
              destination={ value.destination }
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Missions;
