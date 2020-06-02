import React from 'react';
import { Nav } from '../../components'
function About() {
    return (
        <div>
            <Nav flag={1}/>
            <div className="row m-0">
                <div className="col-md-12" >
                    <img src={require('../../assets/img/body.jpg')} className="img-fluid" style={{ height: "auto", width: "100%"}}/>
                </div>
                <div className="col-md-6 p-5 d-flex justify-content-center flex-column align-items-center mt-5">
                    <h1>¿Quiénes somos?</h1>
                    <p>
                        Somos una empresa de diseño multimedia y marketing digital,
                        que nace como un proyecto de emprendimiento como solución a
                        las necesidades de los empresarios en tiempos modernos, generando
                        opciones de crecimiento a las diferentes marcas que atendemos, para
                        que se incluyan en la era digital, con estrategias únicas, adaptables y al
                        alcance de su presupuesto.
                    </p>
                    <button className="btn btn-primary" style={{ borderRadius: 30 }}>CONTÁCTENOS</button>
                </div>
                <div className="col-md-6 mt-5">
                    <img src={require('../../assets/img/logo_vertical.png')} style={{ width: "100%", height: "80%"}}/>
                </div>
            </div>
        </div>
    );
}

export default About;