import React, { useState } from 'react'

const images = [
  {
    url:
      'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80',
    alt: 'home',
  },
  {
    url:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    alt: 'work',
  },
  {
    url:
      'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80',
    alt: 'blog',
  },
  {
    url:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    alt: 'about',
  },
]

const MobileTabNavigation = () => {
  const [index, setIndex] = useState(0)

  const activeStyle = { color: '#8e44ad' }
  const inactiveStyle = { color: '#777' }

  return (
    <div className='phone'>
      <img
        src={images[index].url}
        alt={images[index].alt}
        className='content show'
      />
      <nav>
        <ul>
          <li
            style={index === 0 ? activeStyle : inactiveStyle}
            onClick={() => setIndex(0)}
          >
            <i className='fas fa-home'></i>
            <p>Home</p>
          </li>
          <li
            style={index === 1 ? activeStyle : inactiveStyle}
            onClick={() => setIndex(1)}
          >
            <i className='fas fa-box'></i>
            <p>Work</p>
          </li>
          <li
            style={index === 2 ? activeStyle : inactiveStyle}
            onClick={() => setIndex(2)}
          >
            <i className='fas fa-book-open'></i>
            <p>Blog</p>
          </li>
          <li
            style={index === 3 ? activeStyle : inactiveStyle}
            onClick={() => setIndex(3)}
          >
            <i className='fas fa-users'></i>
            <p>About Us</p>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MobileTabNavigation
