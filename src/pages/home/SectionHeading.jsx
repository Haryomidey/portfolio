const SectionHeading = ({ id, children }) => {
    return (
        <h2 id={id} className="text-xl font-semibold tracking-tight border-b border-gray-300 pb-2 mb-4">
            {children}
        </h2>
    );
}

export default SectionHeading;