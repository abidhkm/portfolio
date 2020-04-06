import React from 'react';

import config from '../../config';
const pic = require('../assets/images/abidh.jpg');

export default function Footer() {
  return (
    <header>
      <span className="avatar">
        <img height="128px" src={pic} alt="" />
      </span>
      <h1>{config.authorName}</h1>
      <p style={{margin: '0 0 .5em 0'}} >{config.heading}</p>
      <p style={{textTransform:'lowercase'}} >{config.contact}</p>
    </header>
  );
}
