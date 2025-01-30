import React, { useState, useEffect, useMemo, useCallback, memo } from "react";
import { createPortal } from 'react-dom';
import "./style.css";

const intialRatings = [
  {
  status: 'off',
  value: 1
},
{
  status: 'off',
  value: 2
},
{
  status: 'off',
  value: 3
},
{
  status: 'off',
  value: 4
},
{
  status: 'off',
  value: 5
}];

const StarRating = memo(({ ratings, setSelectedRatStar }) => {
  console.log('StarRating re rendering')
  return (
    <div className="star-rating">
          <div>Star Rating</div>
          <div className="rating">
           { ratings.map(rating => <span className={
             rating.status === 'off' ? 'off' : 'on'
            }
            onClick={() => {
              setSelectedRatStar(rating.value);
}}>&#9733;</span>)}
          </div>
        </div> 
  )
})

export default function App() {
  const [selectedRat, setSelectedRat] = useState(intialRatings);
  const [counter, setCounter] = useState(0);

  const ratingsCallback = useCallback((selectRatingArg) => {
            console.log('clicked', selectRatingArg);
            const updateRatings = intialRatings.map(rating => {
                if(rating.value <= selectRatingArg) {
                  return {
                    ...rating,
                    status: 'on'
                  }
                }
                return {
                  ...rating,
                  status: 'off'
                }
            });
            setSelectedRat(updateRatings);
  }, [selectedRat]);
  return (
    <div className="app">
       <button onClick={() => setCounter(prevState => prevState + 1)}>Counter {counter}</button>
       <StarRating setSelectedRatStar={ratingsCallback} ratings={selectedRat}/>
    </div>
  );
}
