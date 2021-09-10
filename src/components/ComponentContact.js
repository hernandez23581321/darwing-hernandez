import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("myyllqpb");
 
  return (
        <div>
            <div className="container z-depth-1 my-5 px-0">


          <section id="contact" className="my-md-5 image-contact" 
            >

            <div className="rgba-black-strong rounded p-5">


              <h3 className="text-center font-weight-bold text-white mt-3 mb-5">Contact Us</h3>

              <form onSubmit={handleSubmit} className="mx-md-5" method="post" action="https://formspree.io/f/myyllqpb">

                <div className="row">
                  <div className="col-md-6 mb-4">

                    <div className="card">
                      <div className="card-body px-4">

                      
                        <div className="pt-5 md-form md-outline mt-0">
                          <input type="text" id="name" className="form-control"/>
                          <label for="name">Nombre</label>
                        </div>
                    
                        <div className="pt-5 md-form md-outline">
                          <input type="email"  name="email" id="email" className="form-control"/>
                          <label for="email">Email</label>
                        </div>
                        <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                        />
                        <div className="pt-5 md-form md-outline">
                          <textarea  id="message"
                          name="message"  className="md-textarea form-control" rows="3"></textarea>
                          <label for="message">Mensaje</label>
                        </div>
                        <ValidationError 
                          prefix="Message" 
                          field="message"
                          errors={state.errors}
                        />
                        <button type="submit" disabled={state.submitting} className="mt-5 btn btn-primary btn-md btn-block ml-0 mb-0">Enviar</button>

                      </div>
                    </div>

                  </div>
                  <div className="col-md-5 offset-md-1 mt-md-4 mb-4 color-text">

                    <h5 className="font-weight-bold">Direccion</h5>
                    <p className="mb-0">Santa Barbara,Santa Barbara</p>
              
                    <p className="mb-4 pb-2">Honduras, CA</p>

                    <h5 className="font-weight-bold">Telefono</h5>
                    <p className="mb-4 pb-2">+ 504 9873 9415</p>

                    <h5 className="font-weight-bold">Email</h5>
                    <p>darwing01000100@gmail.com</p>

                  </div>
                </div>

              </form>

            </div>

          </section>



          </div>
        </div>
    );
}


export const  ComponentContact=(e)=> {
 
  return (
    <ContactForm />
  );
}
