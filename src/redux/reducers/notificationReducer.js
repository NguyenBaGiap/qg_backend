import { FINISH_LOADING, START_LOADING } from 'Redux/actions/actionTypes'

const initialState = {
  isOpen: false
}

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isOpen: true,
      }
    case FINISH_LOADING:
      return {
        ...state,
        isOpen: false
      }
    default:
      return state
  }
}
