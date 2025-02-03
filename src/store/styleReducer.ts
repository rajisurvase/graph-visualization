import type { StyleState, Action } from "../types"

const initialState: StyleState = {
  selectedNode: null,
}

const styleReducer = (state = initialState, action: Action): StyleState => {
  switch (action.type) {
    case "SELECT_NODE":
      return {
        ...state,
        selectedNode: action.payload,
      }
    default:
      return state
  }
}

export default styleReducer

