import axios from 'axios';

//SET INITIAL STATE
const initialState = {
   user:{},
   test: 'test'
}


//ACTION TYPE
const GET_USER = 'GET_USER';
const FULFILLED = '_FULFILLED';



//ACTION CREATOR
export function getUser() {
   let userData = axios.get('/auth/me').then( res => {
      return res.data;
   })
   return {
      type: GET_USER
      , payload: userData
   }
}

//REDUCER
export default function reducer(state = initialState, action) {
   switch(action.type) {
      case GET_USER + FULFILLED:
         return Object.assign({}, state , {user:action.payload})


      default:
         return state;
   }
}