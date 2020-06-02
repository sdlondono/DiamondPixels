import React, { useRef, useEffect } from 'react';
import { Nav } from '../../components'
function About() {
    const endRef = useRef(null)


    useEffect(() => {
        console.log("Into here")
        endRef.current.scrollIntoView({ behavior: "smooth" })
    })

    return (
        <div>
            <Nav flag={1} />
            <div className="row m-0">
                <div className="col-md-12" >
                    <img src={require('../../assets/img/body.jpg')} className="img-fluid" style={{ height: "auto", width: "100%" }} />
                </div>
                <div className="col-md-6 p-5 d-flex justify-content-center flex-column align-items-center mt-5">
                    <h1>¿Quiénes somos?</h1>
                    <p className="mt-3">
                        Somos una empresa de diseño multimedia y marketing digital,
                        que nace como un proyecto de emprendimiento como solución a
                        las necesidades de los empresarios en tiempos modernos, generando
                        opciones de crecimiento a las diferentes marcas que atendemos, para
                        que se incluyan en la era digital, con estrategias únicas, adaptables y al
                        alcance de su presupuesto.
                    </p>
                    <button className="btn mt-3" style={{ borderRadius: 30, background: "#35b4bc", color: "white" }}>CONTÁCTENOS</button>
                </div>
                <div className="col-md-6 mt-5"  ref={endRef}>
                    <img src={require('../../assets/img/logo_vertical.png')} style={{ width: "100%" }} />
                </div>
            </div>
            <footer className="d-flex justify-content-center align-items-center p-3" style={{ background: "#35b4bc" }}>
                <p className="p-0 m-0 text-white">Copyright © 2020 - Todos los Derechos Reservados - Diamond Pixels</p>
            </footer>
        </div>
    );
}

export default About;