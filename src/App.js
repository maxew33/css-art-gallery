
import { useState } from 'react';

import './App.css';
import data from './data/data';

function App() {

  const [gallery, setGallery] = useState(0)

  console.log(data, gallery, data[gallery])

  const handleClick = (delta) => {
    let myGallery = gallery
    myGallery += delta
    myGallery > data.length - 1 && (myGallery = 0)
    myGallery < 0 && (myGallery = data.length - 1)
    setGallery(myGallery)
  }

  return (
    <div className="App">
      <button onClick={() => handleClick(-1)}> {'<='} </button>
      <div className="my-gallery">
        
      {data[gallery].name}
      {data[gallery].componentName}
      {data[gallery].desc}
      {data[gallery].link}

      </div>
      <button onClick={() => handleClick(1)}> {'=>'} </button>
    </div>
  );
}

export default App;
