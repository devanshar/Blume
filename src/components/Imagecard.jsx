import React from "react";

const Imagecard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="max-w-xs border-2 border-black transition-transform duration-300 transform hover:scale-105 hover:shadow-lg bg-white mt-4">
      <img 
        src={image.webformatURL} 
        alt='image here' 
        className="w-full h-36 object-cover transition-transform duration-300 transform hover:scale-110" 
      />

      <div className="px-4 py-2">
        <div className="font-bold text-black text-xl mb-2 border-b border-b-2 border-black py-2">
          Photo By {image.user}
        </div>
        <ul className="text-black mb-2 ">
          <li className="my-1">
            <strong>Views:</strong> {image.views}
          </li>
          <li className="my-1">
            <strong>Downloads:</strong> {image.downloads}
          </li>
          <li className="my-1">
            <strong>Likes:</strong> {image.likes}
          </li>
        </ul>
      </div>

      <div className="px-4 py-2 bg-white border-t border-black">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="inline-block  border-2 border-black  px-2 py-1 text-sm font-semibold text-black mr-2 mb-2"
          >
            #{tag.trim()}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Imagecard;
