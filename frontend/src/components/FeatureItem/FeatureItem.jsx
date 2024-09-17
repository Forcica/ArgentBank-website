import React from 'react';

const FeatureItem = ({ logo, altText, title, description }) => (
   <div className="feature-item">
     <img src={logo} alt={altText} className="feature-icon" />
     <h3 className="feature-item-title">{title}</h3>
     <p>{description}</p>
   </div>
);

export default FeatureItem;