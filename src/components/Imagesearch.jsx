import React, { useState } from 'react';



const Imagesearch=({searchText})=>{

    const [text, setText] = useState('');

    const onSubmit = (e) => {
    //   e.preventDefault();
    const newtext= e.target.value;
      searchText(newtext);
      setText(newtext)
    }

    return     <div className='max-w-sm  overflow-hidden my-10 mx-auto'>
    <form onSubmit={(e) => e.preventDefault()}className="w-full max-w-sm">
      <div className="flex items-center border-b border-b-2 border-black py-2">
      <input onChange={onSubmit} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image Term..." />
      <button className="flex-shrink-0 bg-white hover:bg-black border-2 border-black hover:border-black text-sm border-2 text-black py-1 px-2  hover:text-white" type="submit">
    Search
    </button>
    </div>
    </form>
      </div>
}

export default Imagesearch;