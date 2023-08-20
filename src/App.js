import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MatchList from './components/MatchList';
import sportsData from './sportsData';
import './styles.css';


const App = () => {
  const sports = Object.keys(sportsData);
  const [selectedSport, setSelectedSport] = useState(sports[0]);
  const [showDetails, setShowDetails] = useState([]);

  const handleSelectSport = (sport) => {
    setSelectedSport(sport);
  };

  const handleToggleDetails = (sportIndex, matchIndex) => {
    setShowDetails((prevDetails) => {
      const updatedDetails = [...prevDetails];
      updatedDetails[sportIndex] = updatedDetails[sportIndex] || [];
      updatedDetails[sportIndex][matchIndex] = !(
        updatedDetails[sportIndex][matchIndex] || false
      );
      return updatedDetails;
    });
  };

  return (
    <div className="app">
     
      <Sidebar sports={sports} onSelectSport={handleSelectSport} selectedSport={selectedSport} />
      <div className="content">
        <div className="image-container">
          <img src={`/images/${selectedSport}.jpeg`} alt={selectedSport} />
        </div>
        <MatchList
          matches={sportsData[selectedSport]}
          showDetails={showDetails}
          onToggleDetails={handleToggleDetails}
        />
      </div>
    </div>
  );
};

export default App;
