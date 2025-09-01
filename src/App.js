import { useState } from 'react';
import {
  useNodesState,
  useEdgesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import Sidebar from './Components/Sidebar/index';
import FlowCanvas from './Components/FlowCanvas/index';

const initialNodes = [
  {
    id: '1',
    type: 'textNode',
    position: { x: 250, y: 100 },
    data: { label: 'Welcome! How can I help you today?' },
  },
];

const initialEdges = [];

// Default edge options with arrow markers

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);
  const [nodeText, setNodeText] = useState('');

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      <Sidebar 
        setNodes={setNodes}
        selectedNode={selectedNode}
        nodeText={nodeText}
        setNodeText={setNodeText}
        setSelectedNode={setSelectedNode}
        setEdges={setEdges}
        edges={edges}
      />
      <FlowCanvas
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        setEdges={setEdges}
        setSelectedNode={setSelectedNode}
        setNodeText={setNodeText}
      />
      
    </div>
  );
}

export default App;
