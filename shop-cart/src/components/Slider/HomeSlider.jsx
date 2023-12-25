import React, { Fragment } from 'react'
import Carousel from 'react-bootstrap/Carousel';

const HomeSlider = () => {
  return (
    <Fragment>
      <Carousel variant="dark" style={{ maxHeihgt: "650px" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "cover" }}
            src="https://images.unsplash.com/photo-1591035897819-f4bdf739f446?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="pure pu ladies bag"
          />
          <Carousel.Caption className="bg-white">
            <h5>Summer Collection Pure PU Ladies Shoulder Bag </h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <div className="mb-3">
              {/* <Button variant="dark">Shop Now</Button> */}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "cover" }}
            src="https://images.unsplash.com/photo-1591035897819-f4bdf739f446?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="pure mustard oil"
          />
          <Carousel.Caption className="bg-white">
            <h5>100% Cotton Men Blac Suits</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <div className="mb-3">
              {/* <Button variant="dark">Shop Now</Button> */}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "cover" }}
            src="https://images.unsplash.com/photo-1591035897819-f4bdf739f446?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="smart blender home appliance"
          />
          <Carousel.Caption className="bg-white">
            <h5>Decorate Your Smart Kitchen</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <div className="mb-3">
              {/* <Button variant="dark">Shop Now</Button> */}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
    )
}

export default HomeSlider