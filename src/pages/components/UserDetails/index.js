import React from 'react'

import Rock from './assets/rock.svg'
import AvatarUser from '../AvatarUser'
import './style.css'
import { MdLocationOn } from 'react-icons/md'

export default function UserDetials({ name, instrument, city, avatar }) {
  return (
    <section className="userDetails">
      <AvatarUser url={avatar} />
      <div className="userDescription">
        <ul>
          <li>{name}</li>
          <li>{instrument}</li>
          {/* <li> <img src={Rock} alt="Rock" className="rock" /> <span>300</span></li> */}
        </ul>
        <p className="location"> <MdLocationOn size={16} color="#C17E03" /> {city}</p>
      </div>
    </section>
  )
}