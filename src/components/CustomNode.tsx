import { memo } from "react"
import { Handle, Position } from "reactflow"

const CustomNode = ({ data }: { data: { label: string; color: string; fontSize: number } }) => {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div
        style={{
          background: data.color,
          padding: "10px",
          borderRadius: "3px",
          fontSize: `${data.fontSize}px`,
          border: "1px solid #222",
          color: data.color === "#ffffff" ? "#000000" : "#ffffff", // Ensure text is visible
        }}
      >
        {data.label}
      </div>
      <Handle type="source" position={Position.Bottom} />
    </>
  )
}

export default memo(CustomNode)

