import { useEffect, useState } from "react";
import PortofolioList from "../portofolioList/PortofolioList";
import "./portofolio.scss";
import {
  Garduri,
  Balustrade,
  Grilaje,
  Porti,
} from "../../data";

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';



export default function Portofolio() {
  const [selected, setSelected] = useState("garduri");
  const [data, setData] = useState([]);

  const[photoIndex,setPhotoIndex] = useState(0);
  const[isOpen,setIsOpen]=useState(false);
  const list = [
    {
      id: "garduri",
      title: "Garduri",
    },
    {
      id: "balustrade",
      title: "Balustrade",
    },
    {
      id: "grilaje",
      title: "Grilaje",
    },
    {
      id: "porti",
      title: "Porti",
    },
    
  ];

  useEffect(() => {
    switch (selected) {
      case "garduri":
        setData(Garduri);
        break;
      case "balustrade":
        setData(Balustrade);
        break;
      case "grilaje":
        setData(Grilaje);
        break;
      case "design":
        setData(Porti);
        break;
     
      default:
        setData(Garduri);
    }
  }, [selected]);

  return (
    <div  className="portofolio" id="fotografii">
      <h1>Fotografii</h1>
      <ul>
        {  list.map((item) => (
          <div key={item.id} >
            <PortofolioList 
          title={item.title}
          actived={selected === item.id}
          setSelected={setSelected}
          id={item.id}
        /></div>
          
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div key={d.id}  className="item">
            
              <img   onClick={()=>{
                setIsOpen(true);
                setPhotoIndex(d.id-1);
               }}
              src={d.url}
              alt=""
             />
              <h3>{d.title}</h3>
            
          
          </div>
        ))}
      </div>
     
        
{isOpen && (
          <Lightbox
            mainSrc={data[photoIndex].url}
            nextSrc={data[(photoIndex + 1) % data.length].url}
            prevSrc={data[(photoIndex + data.length - 1) % data.length].url}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              
               setPhotoIndex((photoIndex + data.length - 1) % data.length)
              
            }
            onMoveNextRequest={() =>
              
               setPhotoIndex( (photoIndex + 1) % data.length)
              
            }
          />
        )}
    </div>
  );
}