import './imageList.css';
import ImageCard from './ImageCard';
import React from 'react';

const ImageList = (props) => {
	const images = props.images.map((image) => { // put properties here
      return <ImageCard key={image.id} image={image} />; // put a key to give id for each image and alt prop in case the image can't be load by the API
	});

	return (
	  <div className="image-list">{images}</div>
	)
}

export default ImageList;