import React from 'react';
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }
    const bad=()=>{
      store.dispatch({
        type:'BAD'
      })
    }
    const ok=()=>{
      store.dispatch({
        type:'OK'
      })
    }
    const zero=()=>{
      store.dispatch({
        type:'ZERO'
      })


    }
    const all=()=>{
      return store.getState().good+store.getState().ok+store.getState().bad
    }
  
if(all()===0)
{
  return(
    <div>
      <button onClick={good}>good</button>
      <button onClick={ok}>ok</button>
      <button onClick={bad}>bad</button>
      <button onClick={zero}>reset stats</button>
      <h2>Statistics</h2>
      no feedback given
      
    </div>
  )
 
}
else{
  return (
   
    <div>
      <button onClick={good}>good</button>
      <button onClick={ok}>ok</button>
      <button onClick={bad}>bad</button>
      <button onClick={zero}>reset stats</button>
      <h2>Statistics</h2>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
      <div>all {all()}</div>
      <div>Average {(store.getState().good-store.getState().bad)/all()}</div>
      <div>Good {store.getState().good/all()}</div>
    </div>
  )
}
  
}

const root = ReactDOM.createRoot(document.getElementById('root'))
const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
