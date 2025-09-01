import {
    Handle,
    Position,
} from '@xyflow/react';
import Header from './Header';
import Content from './Content';

const TextNode = ({ data, isConnectable, selected }) => {
    return (
        <div className={`bg-white border-2 rounded-lg shadow-lg min-w-[250px] ${selected ? 'border-blue-500 shadow-blue-200' : 'border-gray-300'
            }`}>
            <Header />
            <Content label={data.label} />
            <Handle
                type="target"
                position={Position.Left}
                isConnectable={isConnectable}
                className="!w-3 !h-3 !bg-green-500 !border-2 !border-white !rounded-full"
                style={{ left: -6 }}
            />
            <Handle
                type="source"
                position={Position.Right}
                isConnectable={isConnectable}
                className="!w-3 !h-3 !bg-blue-500 !border-2 !border-white !rounded-full"
                style={{ right: -6 }}
            />
        </div>
    );
};

export default TextNode;
