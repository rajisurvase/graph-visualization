import type React from "react"
import { useCallback } from "react"
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  type Connection,
  type Edge,
} from "reactflow"
import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "../types"
import CustomNode from "./CustomNode"
import "reactflow/dist/style.css"

const nodeTypes = {
  custom: CustomNode,
}

const GraphContainer: React.FC = () => {
  const dispatch = useDispatch()
  const { nodes, edges } = useSelector((state: RootState) => state.graph)

  const [reactFlowNodes, setNodes, onNodesChange] = useNodesState(nodes)
  const [reactFlowEdges, setEdges, onEdgesChange] = useEdgesState(edges)

  const onConnect = useCallback((params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges])

  const onNodeDragStop = useCallback(
    (event: React.MouseEvent, node: CustomNode) => {
      const updatedNodes = nodes.map((n) => (n.id === node.id ? { ...n, position: node.position } : n))
      dispatch({
        type: "UPDATE_NODE_POSITION",
        payload: { id: node.id, position: node.position },
      })
    },
    [dispatch, nodes],
  )

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onNodeDragStop={onNodeDragStop}
      nodeTypes={nodeTypes}
    >
      <Controls />
      <MiniMap />
      <Background variant="dots" gap={12} size={1} />
    </ReactFlow>
  )
}

export default GraphContainer

