import type { GraphState, Action, CustomNode } from "../types"

const initialNodes: CustomNode[] = Array.from({ length: 10 }, (_, i) => ({
  id: `node-${i}`,
  type: "custom",
  position: { x: Math.random() * 500, y: Math.random() * 300 },
  data: { label: `Node ${i}`, color: "#ffffff", fontSize: 14 },
}))

const initialEdges = initialNodes.slice(0, -1).map((node, i) => ({
  id: `edge-${i}`,
  source: node.id,
  target: `node-${i + 1}`,
}))

const initialState: GraphState = {
  nodes: initialNodes,
  edges: initialEdges,
}

const graphReducer = (state = initialState, action: Action): GraphState => {
  switch (action.type) {
    case "UPDATE_NODE":
      return {
        ...state,
        nodes: state.nodes.map((node) =>
          node.id === action.payload.id ? { ...node, data: { ...node.data, ...action.payload.data } } : node,
        ),
      }
    case "UPDATE_NODE_POSITION":
      return {
        ...state,
        nodes: state.nodes.map((node) =>
          node.id === action.payload.id ? { ...node, position: action.payload.position } : node,
        ),
      }
    case "SET_GRAPH":
      return action.payload
    default:
      return state
  }
}

export default graphReducer

