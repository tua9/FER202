import React from 'react'

export default function Footer({ info }) {
  return (
    <footer className='site-footer'>
      <div className='container footer-inner'>
        <img src={info.src} alt='avatar' className='footer-avatar' />
        <div className='footer-text'>
          <h5 className='footer-name'>{info.name}</h5>
          <p className='footer-email'>{info.email}</p>
        </div>
      </div>
    </footer>
  )
}
