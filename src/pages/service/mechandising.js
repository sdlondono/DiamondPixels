import React from 'react';
import { Nav } from '../../components'
function Mechandising() {
    return (
        <div>
            <Nav flag={2} />
            <div className="row m-0">
                <div className="col-md-12 p-4" style={{ backgroundImage: `url(${require('../../assets/img/fondo_service.jpg')})`, backgroundSize: "cover", height: 300 }}>
                    <h1 className="text-white mt-3">Merchandising</h1>
                    <p className="text-white" style={{ fontSize: 18, marginTop: 30 }}>Con diseños llamativos comunicamos lo que queremos expresar como marca y a la
                    vez permitir la fácil difusión y posicionamiento de la misma.</p>
                </div>
                <div className="col-md-12 mt-5">
                    <h1 style={{ color: "#363839" }}>Proyectos realizados</h1>
                    <hr style={{ background: "#35b4bc" }} />
                </div>
                <div className="col-md-12 mt-5 px-5">
                    <p style={{ color: "#363839", fontSize: 20 }}>HILDA SALAZAR ACCESORIOS</p>
                    <hr style={{ background: "#35b4bc", width: "50%", marginLeft: 0 }} />
                    <p style={{ fontSize: 15, fontWeight: "bold" }}>Diseño de Marca - Ubicada en la ciudad de Cali</p>
                    <img src={require('../../assets/img/img_merchandising.png')} style={{ width: "70%" }} />
                </div>
                
                <div className="col-md-12 d-flex justify-content-center mt-5 p-5">
                    <button className="btn" style={{ background: "#35b4bc", color: "white", borderRadius: 20, width: "40%" }}>CONTÁCTENOS</button>
                </div>
            </div>
        </div>
    );
}

export default Mechandising;