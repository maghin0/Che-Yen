import React from 'react';

import './style.scss';

const Vshoot = props => (
  <div>
    <section
      className=" hero 
    is-medium pagebg"
    >
      <div className="container hero-body " style={{ paddingBottom: 0 }}>
        <div className="columns is-centered">
          <div className="vl "></div>
          <div className="column is-two-thirds">
            <figure class="  image  ">
              <div className="cheIMG">
                <h1 className=" has-text-weight-bold has-text-left  imgtitle">
                  Blanchard Tribal <p className="subtitle"> photoshoot</p>
                </h1>
                <h1 className="  has-text-weight-bold is-family-monospace snumber">
                  {props.number}
                </h1>

                <img
                  className=" chePNG"
                  src={props.img}
                  alt="Che indian-traditional look"
                />
                <h1 className="columns textv">
                  <p className="column  is-one-third">
                    <p className=" has-text-grey-light has-text-left">
                      {' '}
                      Photographer
                    </p>

                    <p>Simple Simon Says </p>
                  </p>
                  <p className="column textvspace is-one-third">
                    <p className=" has-text-grey-light has-text-left">
                      {' '}
                      Photographer
                    </p>

                    <p>Simple Simon Says </p>
                  </p>
                  <p className="column textvspace is-one-third">
                    <p className=" has-text-grey-light has-text-left">
                      {' '}
                      Photographer
                    </p>

                    <p>Simple Simon Says </p>
                  </p>
                </h1>
              </div>
            </figure>
          </div>
        </div>
      </div>
      <div className=" columns is-gapless  " style={{ marginTop: 100 }}>
        <div className="column is-6 gradientBg">
          <div className="  ">
            <h1>About the shoot</h1>
          </div>
        </div>
        <div className="column">
          <div className="image ">
            <img src={props.shoot} alt="Che indian-traditional look" />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Vshoot;
