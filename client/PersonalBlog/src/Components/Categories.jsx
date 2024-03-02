export default function Category({ category }) {
    return (
        <div className="px-6 pt-4 pb-2">
          {Array.isArray(category) && category.length > 0 && category.map((item) => (
            <span 
              key={item}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {item}
            </span>
          ))}
        </div>
    )
}
