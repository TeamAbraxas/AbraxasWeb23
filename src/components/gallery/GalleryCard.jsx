import {React} from "react";

function GalleryCard(props){
    return(
  <img className={props.className} src={props.src} alt={props.alt}/>
 
    );
}

export default GalleryCard;