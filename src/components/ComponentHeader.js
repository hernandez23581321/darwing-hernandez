import React from 'react';


export const ComponentHeader=()=>{


     
         return(
             <>
            
             <header id="header" className="navscroll bg-success fixed-top">
         
                <nav className=" navbar navbar-expand-lg navbar-dark bg-dark">

                  <div className="container">

                    <a className="navbar-brand me-2" href="/">
                      <img className="padding-image"
                        src="./logo512.png"
                        height="40"
                        alt="Darwing"
                        loading="lazy"
              
                      />
                    </a>


                    <button
                      className="navbar-toggler"
                      type="button"
                      data-mdb-toggle="collapse"
                      data-mdb-target="#navbarButtonsExample"
                      aria-controls="navbarButtonsExample"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <i className="fas fa-bars"></i>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarButtonsExample">

                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <a className="nav-link" href="/">Sobre mi</a>
                        </li>
                     
                        <li className="nav-item active">
                          <a className="nav-link" href="/service">Servicios
                            <span className="sr-only">(current)</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a type="button" className="nav-link" href="/contacto" >Contacto</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/Conocimientos">Conocimientos</a>
                        </li>
                   </ul>
                      <div className="d-flex align-items-center">
                       
                        <a
                          className="btn btn-dark px-3"
                          href="https://github.com/darwing99"
                          role="button"
                          ><i className="fab fa-github"></i
                        ></a>
                        <ul className="navbar-nav ml-auto nav-flex-icons">
                          <li className="nav-item avatar">
                            <div className="nav-link p-2">
                              <img src="https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-1/p240x240/241237136_611501563593447_6433372404290357015_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeFPHZLSszMOEJOkqp0je7Zug7quQKUBXuiDuq5ApQFe6O8i-he-_9uGBYNPSmFxTYk9h1bn0GQhY1l5sNP9dT32&_nc_ohc=EaRMWaO05RkAX_e9j_1&_nc_ht=scontent-mia3-1.xx&oh=491329a4ce5c7d741c4de4c6b6d0d9f8&oe=613D0A81" className="rounded-circle z-depth-0" alt="avatar" height="50" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                  </div>

                </nav>
                
             </header>
          
           
           </>
         );
      
}