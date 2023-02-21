import React from 'react'
import PropTypes from 'prop-types';


export const GifGridItem = ({title, url}) => {
  
    //console.log(title, url);
    return (
    <div className='card'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

/**
 * Añadir proptypes yarn add
 * a. title obligatorio
 * b. url obigatorio
 */

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
