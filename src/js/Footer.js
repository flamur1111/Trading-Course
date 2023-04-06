import React from 'react';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-info">
        <div className="social-media">
          <h3>Social Media</h3>
          <ul className='FootUl'>
            <li><a href="https://twitter.com"><i className="icon-twitter"></i> Twitter</a></li>
            <li><a href="https://facebook.com"><i className="icon-facebook"></i> Facebook</a></li>
            <li><a href="https://www.instagram.com"><i className="icon-instagram"></i> Instagram</a></li>
            <li><a href="https://www.youtube.com"><i className="icon-youtube"></i> Youtube</a></li>
          </ul>
        </div>
        <div className="newsletter">
          <h3>Newsletter</h3>
          <form>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="address">
          <h3>Address</h3>
          <ul className='FootUl'>
            <li><i className="icon-phone-sign"></i> 06923413657</li>
            <li><i className="icon-info-sign"></i> Central Europe</li>
            <li><i className="icon-info-sign"></i> Postal Code: 10115</li>
            <li><i className="icon-envelope"></i>forextrade@gmail.com</li>
          </ul>
        </div>
      </div>
      <br></br>
    </footer>
  );
}

export default Footer;
