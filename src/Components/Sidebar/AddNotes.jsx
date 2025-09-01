import { useCallback } from "react";

const AddNotes = ({setNodes}) => {

    const addNewNode = useCallback(() => {
        const newNode = {
            id: `node_${Date.now()}`,
            type: 'textNode',
            position: {
                x: Math.random() * 400 + 100,
                y: Math.random() * 400 + 100
            },
            data: { label: 'New message node' },
        };
        setNodes((nds) => nds.concat(newNode));
    }, [setNodes]);
    
    return (<div className="p-4 border-b border-gray-200">
        <button
            onClick={addNewNode}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
        >
            <span>💬</span>
            Add Message Node
        </button>
    </div>)
}

export default AddNotes;