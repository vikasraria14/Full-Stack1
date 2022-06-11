const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
 // console.log(state)
  switch (action.type) {
    case 'GOOD':
      const state1={
        good:state.good+1,ok:state.ok,bad:state.bad
      }
      state={...state1}
      return state
    case 'OK':
      const state2={
        good:state.good,ok:state.ok+1,bad:state.bad
      }
      state={...state2}
      return state
    case 'BAD':
      const state3={
        good:state.good+1,ok:state.ok,bad:state.bad+1
      }
      state={...state3}
      return state
    case 'ZERO':
      const state4={
        good:0,ok:0,bad:0
      }
      state={...state4}
      return state
    default: return state
  }
  
}

export default counterReducer