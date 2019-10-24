import * as React from 'react'

export const TrustUs: React.FunctionComponent = () => {
  const [collapse, setCollapse] = React.useState(true)
  return <section id="TrustUs">
    <div className="container">
      <div className="columns is-multiline">
        <div className="column has-text-centered has-text-grey-dark">
          <h2>Leading Companies Trust Us</h2>
          <p className="has-text-grey-light">
            Our clients are more successful because they leverage talent acoss
            the world to deliver their goals.
          </p>
        </div>
      </div>
    </div>

    <div className="container brands">
      <div className="box">
        <img src="//wl-cebu-assets.s3.amazonaws.com/icons/ibm.svg" />
      </div>
      <div className="box">
        <img src="//wl-cebu-assets.s3.amazonaws.com/icons/hapz.svg" />
      </div>
      <div className={`box${collapse ? ' hidden-initially': ''}`}>
        <img src="//wl-cebu-assets.s3.amazonaws.com/icons/ascentis.png" />
      </div>
      <div className={`box${collapse ? ' hidden-initially': ''}`}>
        <img src="//wl-cebu-assets.s3.amazonaws.com/icons/singtel.svg" />
      </div>
      <div className={`box${collapse ? ' hidden-initially': ''}`}>
        <img src="//wl-cebu-assets.s3.amazonaws.com/icons/nus.png" />
      </div>
      <div className="box">
        <img src="//wl-cebu-assets.s3.amazonaws.com/icons/havas.png" />
      </div>
      <div className="box">
        <img src="//wl-cebu-assets.s3.amazonaws.com/icons/tokopedia.png" />
      </div>
      <div className={`box${collapse ? ' hidden-initially': ''}`}>
        <img src="//wl-cebu-assets.s3.amazonaws.com/icons/makeawish.png" />
      </div>
      <div className={`box${collapse ? ' hidden-initially': ''}`}>
        <img src="//wl-cebu-assets.s3.amazonaws.com/icons/kumparan.png" />
      </div>
      <div className={`box${collapse ? ' hidden-initially': ''}`}>
        <img src="//wl-cebu-assets.s3.amazonaws.com/icons/smu.png" />
      </div>
      <div className={`box${collapse ? ' hidden-initially': ''}`}>
        <img src="//wl-cebu-assets.s3.amazonaws.com/icons/chubb.png" />
      </div>
      <div className={`box${collapse ? ' hidden-initially': ''}`}>
        <img src="//wl-cebu-assets.s3.amazonaws.com/icons/bcg.png" />
      </div>
      <div className={`box${collapse ? ' hidden-initially': ''}`}>
        <img src="//wl-cebu-assets.s3.amazonaws.com/icons/changi.png" />
      </div>
      <div className={`box${collapse ? ' hidden-initially': ''}`}>
        <img src="//wl-cebu-assets.s3.amazonaws.com/icons/myrepublic.png" />
      </div>
      <div className={`box${collapse ? ' hidden-initially': ''}`}>
        <img src="//wl-cebu-assets.s3.amazonaws.com/icons/ovo-min.png" />
      </div>
    </div>

    <div className="has-text-centered actions is-hidden-desktop touch">
      <button
        type="button"
        className="button is-large is-centered"
        onClick={() => {
          setCollapse(!collapse)
        }}
      >
        See all
      </button>
    </div>
  </section>
}

export default TrustUs
