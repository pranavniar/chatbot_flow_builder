import {
    ReactFlow,
    MiniMap,
    Controls,
    Background,
    addEdge,
    MarkerType,
} from '@xyflow/react';
import { useCallback } from 'react';
import TextNode from '../Nodes/TextNode/index';
import FlowStats from './FlowStats';

const defaultEdgeOptions = {
    style: {
        strokeWidth: 2,
        stroke: '#6366f1'
    },
    type: 'smoothstep',
    markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: '#6366f1',
    },
    animated: false,
};

const nodeTypes = {
    textNode: TextNode,
    //Add more node types here
};

const FlowCanvas = ({ nodes, edges, onNodesChange, onEdgesChange, setEdges, setSelectedNode, setNodeText }) => {

    const onConnect = useCallback(
        (params) => {
            const newEdge = {
                ...params,
                ...defaultEdgeOptions,
                id: `edge-${params.source}-${params.target}`,
            };
            setEdges((eds) => addEdge(newEdge, eds));
        },
        [setEdges]
    );

    const onNodeClick = useCallback((_, node) => {
        setSelectedNode(node);
        setNodeText(node.data.label);
    }, [setSelectedNode, setNodeText]);

    const onPaneClick = useCallback(() => {
        setSelectedNode(null);
        setNodeText('');
    }, [setSelectedNode, setNodeText]);

    return (
        <div className="flex-1 relative">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onNodeClick={onNodeClick}
                onPaneClick={onPaneClick}
                nodeTypes={nodeTypes}
                defaultEdgeOptions={defaultEdgeOptions}
                fitView
                className="bg-gray-50"
            >
                <Controls className="!bg-white !border !border-gray-200 !shadow-lg" />
                <MiniMap
                    className="!bg-white !border !border-gray-200 !shadow-lg"
                    nodeStrokeColor="#3b82f6"
                    nodeColor="#dbeafe"
                    maskColor="rgba(0, 0, 0, 0.1)"
                />
                <Background
                    variant="dots"
                    gap={20}
                    size={1}
                    color="#e5e7eb"
                />
            </ReactFlow>
            <FlowStats nodes={nodes} edges={edges} />
        </div>
    )
}

export default FlowCanvas;