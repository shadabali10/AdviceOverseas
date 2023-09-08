import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={2000}
      >
        <div>
          <img src="data:image/jpeg;base64,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" alt="abg" />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
          <img src="https://th.bing.com/th/id/OIP.GBzmVgh2QaeYprivEE65dAAAAA?pid=ImgDet&w=177&h=177&c=7&dpr=1.3"  alt="abg"/>
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
          <img src="https://th.bing.com/th/id/OIP.hnrQOIdtrBeuyiC27bVZmQAAAA?pid=ImgDet&w=177&h=177&c=7&dpr=1.3" alt="abg"/>
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Fontend Developer </h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
        <div>
          <img src="https://th.bing.com/th?id=OIP.UkTBowRhbbhym0TupnXktgHaE7&w=306&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="abg"/>
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Frontend Developer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
          <img src="https://th.bing.com/th?id=OIP.PlmU4CkadPFONP2jfjfSLwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="abg"/>
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Backend Developer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
          <img src="https://th.bing.com/th?id=OIP.nzqKyZd-q8C9rjA3Jx7FWgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="abg"/>
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Backend Developer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}