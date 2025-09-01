const FlowStats = ({ nodes, edges }) => {
    return (
       <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg px-4 py-2 text-sm">
            <div className="flex gap-4 text-gray-600">
                <span>Nodes: {nodes.length}</span>
                <span>Connections: {edges.length}</span>
            </div>
        </div>
    )
}

export default FlowStats;