import type { Edge, Node } from "reactflow"

export interface CustomNode extends Node {
  data: {
    label: string
    color: string
    fontSize: number
  }
}

export interface GraphState {
  nodes: CustomNode[]
  edges: Edge[]
}

export interface Action {
  type: string
  payload: any
}

export interface HistoryState {
  past: GraphState[]
  present: GraphState
  future: GraphState[]
}

export interface RootState {
  graph: GraphState
  history: HistoryState
}

export interface StyleState  {
  selectedNode : null
}