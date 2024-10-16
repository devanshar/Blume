
import {React, useState, useEffect,memo } from 'react';
import Imagecard from './Imagecard';
import Navbar from './navbar';
import Shimmer from './shimmer';



const ImageShow =(()=>
     {
  const [images,setImages]=useState([]);
  const [isLoad,setisLoad]=useState(true);
  const [term,setTerm]=useState('');

  useEffect(()=>{   
    fetch (`https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY}&q=${term}&image_type=photo`).then(res=>res.json()).then(data=>{
      setImages(data.hits);
      setisLoad(false);
      
    })
    .catch(err=>console.log(err));
  },[term]);
   
  return (
<div className='container mx-auto p-4'>
<Navbar searchText={(text) => setTerm(text)} />


{!isLoad && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1> }
  { isLoad ?<Shimmer/>:
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 border-2 border-black py-4 px-7'>
{images.map(image=>(
  <Imagecard key ={image.id} image={image}  />
))}
</div>}
</div>
  );
});

export default ImageShow;
