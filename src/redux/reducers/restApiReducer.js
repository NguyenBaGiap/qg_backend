import * as actionTypes from 'Redux/actions/actionTypes'

const initialState = {
  isLoading: false,
  hasError: false,
  errorMessage: '',
}

export const restApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_LOADING_STATUS:
      return {
        ...state,
        ...action.payload
      }
    case actionTypes.REQUEST_FINISH_STATUS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
