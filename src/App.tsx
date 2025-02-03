import type React from "react"
import { Provider } from "react-redux"
import store from "./store"
import GraphContainer from "./components/GraphContainer"
import NodeCustomizationPanel from "./components/NodeCustomizationPanel"

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div style={{ display: "flex", height: "100vh" }}>
        <div style={{ flex: 1 }}>
          <GraphContainer />
        </div>
        <div style={{ width: "300px", padding: "20px", overflowY: "auto" }}>
          <NodeCustomizationPanel />
        </div>
      </div>
    </Provider>
  )
}

export default App

