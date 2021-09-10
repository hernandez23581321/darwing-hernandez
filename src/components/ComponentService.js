import React from 'react'

export const ComponentService = () => {
    return (
        <div>
            <div className="container my-5">

        <section>

        <h6 className="font-weight-bold text-center grey-text text-uppercase small mb-4">Services</h6>
        <h3 className="font-weight-bold text-center dark-grey-text pb-2">Nuestros Servicios</h3>
        <hr className="w-header my-4"/>
        <p className="lead text-center text-muted pt-2 mb-5">Diseño de aplicaciones móviles, web, y de escritorio.</p>

        <div className="row">

                    <div className="col-md-6 col-xl-4 mb-4">
                    <div className="card text-center bg-primary text-white">
                        <div className="card-body">
                        <p className="mt-4 pt-2"><i className="far fa-object-ungroup fa-4x"></i></p>
                        <h5 className="font-weight-normal my-4 py-2">Web Design</h5>
                        <p className="mb-4">Diseño de aplicaciones web utilizando tecnologías recientes, entornos de trabajos como React, Angular para parte Frontend y spring boot, php, y node js para Backend.</p>
                        </div>
                    </div>
                    </div>

                    <div className="col-md-6 col-xl-4 mb-4">
                    <div className="card text-center">
                        <div className="card-body">
                        <p className="mt-4 pt-2"><i className="fas fa-mobile-alt fa-4x grey-text"></i></p>
                        <h5 className="font-weight-normal my-4 py-2">Mobile App</h5>
                        <p className="text-muted mb-4">Diseño de aplicaciones moviles hibridas utilizando tecnologias como flutter, xamarin forms y java.</p>
                        </div>
                    </div>
                    </div>

          

                    <div className="col-md-6 col-xl-4">
                    <div className="card text-center">
                        <div className="card-body">
                        <p className="mt-4 pt-2"><i className="fas fa-bullhorn fa-4x grey-text"></i></p>
                        <h5 className="font-weight-normal my-4 py-2">Network Design</h5>
                        <p className="text-muted mb-4">Diseño de redes usando herramientas como cisco, mikrotik</p>
                        </div>
                    </div>
                    </div>

                </div>

                </section>


        </div>
        </div>
    )
}
