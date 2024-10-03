
import './contact.css';

export default function Contact() {
  return (
    <div className='pb-5 mb-5' id="contact">
      <div className='fs-1 text-center title pt-5 mt-5 pb-3 fw-semibold text-primary'>
        CONTACT
      </div>
      <div className='pt-4 px-5'>
        <div className='mt-4'>
          <div className='d-flex justify-content-center'>
            <a href="mailto:yannikbauer.1@gmail.com" target="_blank" rel="noopener noreferrer" className='noDecoration'>
              <i class="bi bi-envelope-fill me-3"></i> yannikbauer.1@gmail.com
            </a>
          </div>
        </div>
        <div className='my-3'>
          <div className='d-flex justify-content-center'>
            <i class="bi bi-geo-alt-fill me-3"></i> St. George, United States / Porto, Portugal / Aschach, Germany
          </div>
        </div>
        <div className=''>
          <div className='col d-flex justify-content-center'>
            <a href="https://github.com/YannikBauer1" target="_blank" rel="noopener noreferrer">
              <i class="bi bi-github me-3"></i>
            </a>
            <a href="https://www.linkedin.com/in/yannik-bauer-53259b233/" target="_blank" rel="noopener noreferrer">
              <i class="bi bi-linkedin me-3"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}


/*
<div className='row'>
              <div className='col'>
                <div class="mb-3">
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <div class="mb-3">
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
                </div>
              </div>
              <div className='col'>
                <div class="mb-3">
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Phone" />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <div class="mb-3">
                  <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="4"></textarea>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col d-grid gap-2'>
                <button class="btn btn-primary" type="submit">SEND</button>
              </div>
            </div>

*/