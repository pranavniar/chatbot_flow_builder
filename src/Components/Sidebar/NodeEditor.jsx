import { useCallback } from "react";

const NodeEditor = ({ selectedNode, nodeText, setNodeText, edges, setNodes, setSelectedNode, setEdges }) => {

    const updateNodeText = useCallback(() => {
        if (selectedNode && nodeText.trim()) {
            setNodes((nds) =>
                nds.map((node) =>
                    node.id === selectedNode.id
                        ? { ...node, data: { ...node.data, label: nodeText } }
                        : node
                )
            );
        }
    }, [selectedNode, nodeText, setNodes]);

    const deleteNode = useCallback(() => {
        if (selectedNode) {
            setNodes((nds) => nds.filter((node) => node.id !== selectedNode.id));
            setEdges((eds) =>
                eds.filter((edge) =>
                    edge.source !== selectedNode.id && edge.target !== selectedNode.id
                )
            );
            setSelectedNode(null);
            setNodeText('');
        }
    }, [selectedNode, setNodes, setEdges]);

    return (<div className="flex-1 p-4">
        {selectedNode ? (
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900">Edit Node</h3>
                    <button
                        onClick={deleteNode}
                        className="px-2 py-1 text-red-600 hover:bg-red-50 rounded text-sm"
                    >
                        🗑️ Delete
                    </button>
                </div>

                <div className="space-y-3">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Message Text
                        </label>
                        <textarea
                            value={nodeText}
                            onChange={(e) => setNodeText(e.target.value)}
                            placeholder="Enter your message..."
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none h-24 text-sm"
                        />
                    </div>

                    <button
                        onClick={updateNodeText}
                        disabled={!nodeText.trim()}
                        className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-md transition-colors duration-200 font-medium"
                    >
                        Update Message
                    </button>
                </div>

                {/* Connection Info */}
                <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Connections</h4>
                    <div className="text-xs text-gray-500 space-y-1">
                        <div>Incoming: {edges.filter(edge => edge.target === selectedNode.id).length}</div>
                        <div>Outgoing: {edges.filter(edge => edge.source === selectedNode.id).length}</div>
                    </div>
                </div>
            </div>
        ) : (
            <div className="text-center py-12">
                <div className="text-gray-400 mb-3 text-4xl">🎯</div>
                <p className="text-gray-500 text-sm">
                    Click on a node to edit its properties
                </p>
            </div>
        )}
    </div>)
}

export default NodeEditor;