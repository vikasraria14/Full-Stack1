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

  const update=()=>
  {
    console.log(good,bad,neutral);
    updateAll(good+bad+neutral);
    updateAverage((good-1*bad)/all)
    updatePositive(good/all)
  }

  const increaseGood=()=>{
    setGood(good+1);
    console.log(good);
   // updateAll(good+bad+neutral);
    update();
  }
  const increaseNeutral=()=>{
    setNeutral(neutral+1);
    console.log(neutral);
    update();
  }
  const increaseBad=()=>{
    console.log(bad);
    setBad(bad+1);
    update();
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