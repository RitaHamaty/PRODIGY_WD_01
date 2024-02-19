import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { IoLogoInstagram } from "react-icons/io5";

const About = () => {
  return (
  <div className='backfooter'>
  <div className='container py-4 px-3 mt-5 text-body-secondary '>
    <div className="row">
      <div className="col-lg-5 mb-3">
        <a className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" href="/" aria-label="Bootstrap">
          <span className="fs-5">Wedding Planners</span>
        </a>
        <ul className="list-unstyled small">
          <li className="mb-2">We plan your wedding from A to Z.</li>
          <li className="mb-2">No need to stress about anything.</li>
        </ul>
      </div>
      <div className="col-6 col-lg-4 offset-lg-1 mb-3">
        <h5>Links</h5>
        <ul className="list-unstyled">
          <li className="mb-2"><a href="/">Home</a></li>
          <li className="mb-2"><a href="/docs/5.3/">Services</a></li>
          <li className="mb-2"><a href="/docs/5.3/examples/">Gallery</a></li>
        </ul>
      </div>
      <div className="col-6 col-lg-2 mb-3">
        <h5>Social</h5>
        <ul className="list-unstyled">
          <li className="mb-2"><a href="/"><SiGmail/>Gmail</a></li>
          <li className="mb-2"><a href="/"><FaFacebook/>Facebook</a></li>
          <li className="mb-2"><a href="/"><IoLogoInstagram/>Instagram</a></li>
        </ul>
      </div>
    </div>
  </div>
  </div>
  )
}

export default About