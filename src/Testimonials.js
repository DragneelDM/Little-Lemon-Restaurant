import React from 'react'

function Testimonials() {
  return (
    <div>
        <div className="container border-box d-flex test mt-5 g-3 justify-content-evenly flex-wrap p-0">
        <div className="card testimonial-card mt-2 mb-3 customCard">
          <div className="card-up aqua-gradient"></div>
          <div className="avatar mx-auto white">
            <img
              src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
              alt="Trendy Pants and Shoes"
              className="img-fluid rounded-5"
              title="Profile Pic"
            />
          </div>

          <div className="card-body text-center">
            <h4 className="card-title font-weight-bold">Jane Emily</h4>
            <hr />
            <p>
              <i className="fas fa-quote-left"></i> Love it.
            </p>
          </div>
        </div>
        <div className="card testimonial-card mt-2 mb-3 customCard">
          <div className="card-up aqua-gradient"></div>
          <div className="avatar mx-auto white">
            <img
              className="img-fluid d-flex mx-auto rounded-5"
              src="https://i.imgur.com/Uz4FjGZ.jpg"
              alt="Martha Smith"
              title="Profile Pic"
            />
          </div>
          <div className="card-body text-center">
            <h4 className="card-title font-weight-bold">Martha Smith</h4>
            <hr />
            <p>
              <i className="fas fa-quote-left"></i> Nice !!
            </p>
          </div>
        </div>
        <div className="card testimonial-card mt-2 mb-3 customCard">
          <div className="card-up aqua-gradient"></div>
          <div className="avatar mx-auto white">
            <img
              className="img-fluid d-flex mx-auto rounded-5"
              src="https://i.imgur.com/udGH5tO.jpg"
              title="Profile Pic"
              alt="Courtney"
            />
          </div>
          <div className="card-body text-center">
            <h4 className="card-title font-weight-bold">Courtney</h4>
            <hr />
            <p>
              <i className="fas fa-quote-left"></i> Great
            </p>
          </div>
        </div>
        <div className="card testimonial-card mt-2 mb-3 customCard">
          <div className="card-up aqua-gradient"></div>
          <div className="avatar mx-auto white">
            <img
              className="img-fluid d-flex mx-auto rounded-5"
              src="https://media.sciencephoto.com/image/p7010300/800wm/P7010300-Smiling_face.jpg"
              alt="woman avatar"
              title="Profile Pic"
            />
          </div>
          <div className="card-body text-center">
            <h4 className="card-title font-weight-bold">James olatunji</h4>
            <hr />
            <p>
              <i className="fas fa-quote-left"></i> Simply Brillant
            </p>
          </div>
        </div>
        <div className="card testimonial-card mt-2 mb-3 customCard">
          <div className="card-up aqua-gradient"></div>
          <div className="avatar mx-auto white">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
              className="rounded-circle img-fluid"
              alt="woman avatar"
              title="Profile Pic"
            />
          </div>
          <div className="card-body text-center">
            <h4 className="card-title font-weight-bold">Sol caprice</h4>
            <hr />
            <p>
              <i className="fas fa-quote-left"></i> Marvellous
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials