import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ data, onClick }) => {
  return (
    <li className="ImageGalleryItem" onClick={onClick} role="presentation">
      <img
        src={data.webformatURL}
        alt={data.tags}
        id={data.id}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  data: PropTypes.shape({
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
