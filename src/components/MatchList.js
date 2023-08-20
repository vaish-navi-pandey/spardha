import React, { useState } from 'react';
import {MdOutlineWatchLater,MdDateRange} from "react-icons/md";
import {BiLocationPlus} from "react-icons/bi"

const MatchList = ({ matches }) => {
  const [detailsMap, setDetailsMap] = useState({});

  const toggleDetails = (sportIndex, matchIndex) => {
    setDetailsMap((prevDetailsMap) => {
      const newDetailsMap = { ...prevDetailsMap };
      const key = `${sportIndex}-${matchIndex}`;
      newDetailsMap[key] = !newDetailsMap[key];
      return newDetailsMap;
    });
  };

  const isDetailsVisible = (sportIndex, matchIndex) => {
    const key = `${sportIndex}-${matchIndex}`;
    return detailsMap[key] || false;
  };

  return (
    <div className="match-list">
      {matches.map((sportMatches, sportIndex) => (
        <div key={sportIndex}>
          {sportMatches.matches.map((match, matchIndex) => (
            <div key={matchIndex} className="match-item">
              <div className="match-details">
                <div className="match-teams">
                  {match.teamA} vs {match.teamB}
                </div>
                <div className="match-info">
                  <div>{match.location}</div>
                  <div><BiLocationPlus /></div>
                </div>
                <div className="match-time">
                    <div>{match.time}</div>
                    <div><MdOutlineWatchLater/></div>
                </div>
                <div className="match-date">
                    <div>{match.date}</div>
                    <div><MdDateRange/></div>
                </div>
                <div className="view-details">
                <button onClick={() => toggleDetails(sportIndex, matchIndex)}>
                  {isDetailsVisible(sportIndex, matchIndex) ? 'Hide Details' : 'View Details'}
                </button>
                {isDetailsVisible(sportIndex, matchIndex) && (
                  <p className="details-text">
                    Further details will be displayed later.
                  </p>
                )}
              </div>
              </div>
              
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatchList;
