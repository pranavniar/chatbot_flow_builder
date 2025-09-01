import Header from './Header';
import Instructions from "./Instructions";
import AddNotes from "./AddNotes";
import NodeEditor from "./NodeEditor";

const Sidebar = ({ setNodes, selectedNode, nodeText, setNodeText, setSelectedNode, setEdges, edges }) => {

    return (<div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        <Header />
        <Instructions />
        <AddNotes
            setNodes={setNodes}
        />
        <NodeEditor
            selectedNode={selectedNode}
            nodeText={nodeText}
            setNodeText={setNodeText}
            edges={edges}
            setNodes={setNodes}
            setSelectedNode={setSelectedNode}
            setEdges={setEdges}
        />
    </div>);
}

export default Sidebar;