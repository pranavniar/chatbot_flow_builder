const Instructions = () => {
    return (<div className="p-4 bg-blue-50 border-b border-gray-200">
            <h3 className="font-medium text-blue-900 mb-2 text-sm">How to Connect:</h3>
            <div className="text-xs text-blue-700 space-y-1">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Blue handle (right): Start connection</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Green handle (left): End connection</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-blue-600">→</span>
                    <span>Arrows show conversation flow</span>
                </div>
            </div>
        </div>)
}

export default Instructions;