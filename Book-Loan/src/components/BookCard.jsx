
function BookCard({ title, author, coverImage, onRead }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 w-64 flex-shrink-0 border border-gray-100">
      <div className="h-80 overflow-hidden relative group">
        <img 
          src={coverImage} 
          alt={title} 
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
            <button 
                onClick={onRead}
                className="bg-white text-blue-900 px-6 py-2 rounded-full font-bold hover:bg-blue-50 transition"
            >
                قراءة الآن
            </button>
        </div>
      </div>

      <div className="p-5 text-right">
        <h3 className="text-xl font-bold text-gray-800 mb-1 truncate">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{author}</p>
        
        <div className="flex justify-between items-center">
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                مجانـي
            </span>
            <button 
                onClick={onRead}
                className="text-blue-600 hover:text-blue-800 text-sm font-bold flex items-center gap-1"
            >
                تصفح <span className="text-lg">←</span>
            </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;