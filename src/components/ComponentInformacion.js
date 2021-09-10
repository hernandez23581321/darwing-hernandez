import React from 'react';

export const ComponentInformacion = () => {
  const dato="{DarCode}";
    return (
       <>
       <div className="p-5 text-center image-fondo bg-image">
                  <div className="mask fondo-oscuro" >
                    <div className="d-flex justify-content-center align-items-center h-100">
                      <div className="text-white">
                        <h1 className="mb-3">{dato}</h1>
                        <h4 className="mb-3">Código y más...</h4>
                        <a className="btn btn-outline-light btn-lg" href="https://www.facebook.com/darwingcastellanos.hernandez/" role="button"
                          >Facebook</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
            <div className="container my-5 py-5 z-depth-1">



              <section className="px-md-5 mx-md-5 text-center dark-grey-text">

                <div className="row">

              
                  <div className="col-md-6 mb-4 mb-md-0">
                  <div className="avatar mx-auto mb-4">
                    <img src="https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-1/p240x240/241237136_611501563593447_6433372404290357015_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeFPHZLSszMOEJOkqp0je7Zug7quQKUBXuiDuq5ApQFe6O8i-he-_9uGBYNPSmFxTYk9h1bn0GQhY1l5sNP9dT32&_nc_ohc=EaRMWaO05RkAX_e9j_1&_nc_ht=scontent-mia3-1.xx&oh=491329a4ce5c7d741c4de4c6b6d0d9f8&oe=613D0A81" className="rounded-circle img-fluid"
                      alt="Darwing"/>
                  </div>

                    <h3 className="font-weight-bold">Hola!, mi nombre es Darwing </h3>

                    <p className="text-muted">Desarrollador de aplicaciones web, móviles y de escritorio, con conocimientos básicos en diferentes áreas(Redes, Matemáticas, física, programación y diseño gráfico y web.)</p>

                    <a className="btn btn-purple btn-md ml-0" href="https://drive.google.com/file/d/16JfSXQmiXnJps4ewmBLPiEkQ3E6cdYyu/view?usp=sharing" role="button">Curriculum Vitae<i className="fa fa-download ml-2"></i></a>

                    <hr className="my-5"/>

                    <p className="font-weight-bold">Follow us on:</p>

                    <a href="https://www.facebook.com/darwingcastellanos.hernandez/" className="mx-1" role="button"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com/Darwing23317025" className="mx-1" role="button"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/darwing1999/" className="mx-1" role="button"><i className="fab fa-instagram"></i></a>
                  
                    <a href="https://www.youtube.com/channel/UCYc5Gpp_regshwKvDlufvPA" className="mx-1" role="button"><i className="fab fa-youtube"></i></a>
                    <a href="https://github.com/hernandez23581321" className="mx-1" role="button"><i className="fab fa-github"></i></a>
                  

                  </div>
                
                  <div className="col-md-5 mb-4 mb-md-0">

                    <img src="/frame.svg" className="img-fluid" alt=""/>

                  </div>
                
                </div>

              </section>

              </div>


   

            </>

    );
}
