import React from 'react'

import './style.css'

export default function AvatarUser({ url }) {
  return (
    <img
      className="avatar"
      src={
        url
          ? url
          : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Noel_Gallagher%27s_High_Flying_Birds%2C_Clapham_Common%2C_Calling_Festival%2C_London_%2819616643351%29.jpg/1200px-Noel_Gallagher%27s_High_Flying_Birds%2C_Clapham_Common%2C_Calling_Festival%2C_London_%2819616643351%29.jpg"
      }
      alt=""
    />
  );
}