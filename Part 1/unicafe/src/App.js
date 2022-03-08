import { useState } from 'react'
import Button from './Button'
import Statistic from './Statistic'


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all,updateAll]=useState(0);
  const [average, updateAverage]=useState(0);
  const [positive,updatePositive]=useState(0);

  const update=(good,bad,neutral)=>
  {
    const all=good+bad+neutral;
    updateAll(good+bad+neutral);
    updateAverage((good-1*bad)/all)
    updatePositive((good/all)*100)
  }
  

  const increaseGood=()=>{
    let x=good;
    x++;
    setGood(x);
    update(x,bad,neutral);
  }

  const increaseNeutral=()=>{
    let x=neutral;
    x++;
    setNeutral(x);
    update(good,bad,x);
  }
  const increaseBad=()=>{
    let x=bad;
    x++;
    setBad(x);
    update(good,x,neutral);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={'good'} fun={increaseGood}/>
      <Button text={'neutral '} fun={increaseNeutral}/>
      <Button text={'bad'} fun={increaseBad}/>      
      <Statistic good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )
}

export default App