
import type React from "react"
import { useSelector, useDispatch } from "react-redux"
import type { RootState, CustomNode } from "../types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const NodeCustomizationPanel: React.FC = () => {
  const dispatch = useDispatch()
  const { nodes } = useSelector((state: RootState) => state.graph)

  const handleNodeChange = (id: string, changes: Partial<CustomNode["data"]>) => {
    dispatch({
      type: "UPDATE_NODE",
      payload: { id, data: changes },
    })
  }

  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Node Customization</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {nodes.map((node) => (
            <AccordionItem key={node.id} value={node.id}>
              <AccordionTrigger>{node.data.label}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor={`label-${node.id}`}>Label</Label>
                    <Input
                      id={`label-${node.id}`}
                      value={node.data.label}
                      onChange={(e) => handleNodeChange(node.id, { label: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`color-${node.id}`}>Color</Label>
                    <div className="flex items-center space-x-2">
                      <Input
                        id={`color-${node.id}`}
                        type="color"
                        value={node.data.color}
                        onChange={(e) => handleNodeChange(node.id, { color: e.target.value })}
                        className="w-12 h-8 p-1"
                      />
                      <span className="text-sm text-muted-foreground">{node.data.color}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`fontSize-${node.id}`}>Font Size: {node.data.fontSize}px</Label>
                    <Slider
                      id={`fontSize-${node.id}`}
                      min={12}
                      max={24}
                      step={1}
                      value={[node.data.fontSize]}
                      onValueChange={(value) => handleNodeChange(node.id, { fontSize: value[0] })}
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}

export default NodeCustomizationPanel

