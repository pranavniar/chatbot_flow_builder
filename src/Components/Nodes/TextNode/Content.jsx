const Content = ({ label }) => {
    return (<div className="p-4">
        <p className="text-sm text-gray-700 leading-relaxed">
            {label || 'Enter your message...'}
        </p>
    </div>)
}

export default Content;