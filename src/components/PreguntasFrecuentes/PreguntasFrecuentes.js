import React from 'react'
import "./PreguntasFrecuentesStyle.css"

export const PreguntasFrecuentes = () => {
  return (
    <div className='flexPreguntas'>
        <h2 className='flexPreguntasTitulo'>Preguntas frecuentes</h2>
                        <div className='pregFrec'>

                            <div className='pregFrecInterno'>
                                <p type="button" data-bs-toggle="collapse" data-bs-target="#preguntasFrec" aria-expanded="false" aria-controls="collapseExample">
                                <p className='imagenFont3'><span className='textFrec'>Formas de pago</span></p>
                                
                                </p>
                                    <div className="collapse colapsados" id="preguntasFrec">
                                        <ul>
                                            <p><b>Titular:</b> VIMAIL S.R.L.</p>
                                            <p><b>Cuenta Corriente Nº:</b> 100-100114512-000</p>
                                            <p><b>CBU Nº:</b> 03401008 00100114512005</p>
                                            <p><b>CUIT Nº:</b> 30-71506354-5</p>
                                        </ul>
                                    </div>
                            </div>
                                                        
                            <div className='pregFrec'>
                                <p type="button" data-bs-toggle="collapse" data-bs-target="#soporte" aria-expanded="false" aria-controls="collapseExample">
                                <p className='imagenFont3'><span className='textFrec'>Soporte</span></p>
                                
                                </p>
                                    <div className="collapse colapsados" id="soporte">
                                        <ul>
                                            <h5>Soporte alta ticket</h5>
                                            <p>Antes de realizar su consulta telefónica, consulte si la respuesta no está disponible en las Ayudas / How to, así como también cuenta con nuestra herramienta de soporte mediante ticket. .</p>
                                            <h5>Soporte telefónico</h5>
                                            <p>Si la respuesta no se encuentra dentro de las "Ayudas / How to" puede contactarnos a nuestras léneas telefónicas de:
                                                Lunes a Viernes de 9 a 18 hs, 011-6841-3870.
                                            </p>
                                        </ul>
                                    </div>
                            </div>
                                
                            <div className='pregFrec'>
                                <p type="button" data-bs-toggle="collapse" data-bs-target="#pop3" aria-expanded="false" aria-controls="collapseExample">
                                <p className='imagenFont3'><span className='textFrec'>Como dar de altas sus cuentas POP3 en diferentes dispositivos.</span></p>
                                
                                </p>
                                    <div className="collapse colapsados" id="pop3">
                                        <h5 className='tituloPop3 mb-3'>Cuentas POP3</h5>
                                        <ul>
                                            <a id='catalogo' href={process.env.PUBLIC_URL+`pdf/Instructivo_POP3_ANDROID.pdf`} target="_blank" rel="noreferrer" className='visorPdf'><p><b>Android</b></p></a>

                                            <a id='catalogo' href={process.env.PUBLIC_URL+`pdf/Instructivo_POP3_Office_2013.pdf`} target="_blank" rel="noreferrer" className='visorPdf'><p><b>Office 2013</b></p></a>

                                            <a id='catalogo' href={process.env.PUBLIC_URL+`pdf/Instructivo_POP3_SEGURO_Office_2013.pdf`} target="_blank" rel="noreferrer" className='visorPdf'><p><b>POP3 seguro</b></p></a>

                                            <a id='catalogo' href={process.env.PUBLIC_URL+`pdf/Instructivo_IMAP_SEGURO_Office_2013.pdf`} target="_blank" rel="noreferrer" className='visorPdf'><p><b>IMAP seguro</b></p></a>

                                            <a id='catalogo' href={process.env.PUBLIC_URL+`pdf/Instructivo_IMAP_Office_2013.pdf`} target="_blank" rel="noreferrer" className='visorPdf'><p><b>IMAP</b></p></a>

                                        </ul>
                                    </div>
                            </div>

                            <div className='pregFrec'>
                                <p type="button" data-bs-toggle="collapse" data-bs-target="#exchange" aria-expanded="false" aria-controls="collapseExample">
                                <p className='imagenFont3'><span className='textFrec'>Como revisar y configurar cuentas Exchange.</span></p>
                                
                                </p>
                                    <div className="collapse colapsados" id="exchange">
                                        <h5 className='tituloPop3 mb-3'>Cuentas Exchange</h5>
                                        <ul>
                                            <a id='catalogo' href={process.env.PUBLIC_URL+`pdf/Instructivo_EXCHANGE_Office_2013.pdf`} target="_blank" rel="noreferrer" className='visorPdf'><p><b>Microsoft Exchange Office 2013</b></p></a>

                                            <a id='catalogo' href={process.env.PUBLIC_URL+`pdf/cambiar_password.pdf`} target="_blank" rel="noreferrer" className='visorPdf'><p><b>Cambiar contraseña personal</b></p></a>

                                            <a id='catalogo' href={process.env.PUBLIC_URL+`pdf/cambiar_firma.pdf`} target="_blank" rel="noreferrer" className='visorPdf'><p><b>Cambiar firma personal</b></p></a>

                                            <a id='catalogo' href={process.env.PUBLIC_URL+`pdf/instructivo_exchange_android.pdf`} target="_blank" rel="noreferrer" className='visorPdf'><p><b>Configurar cuentas Exchange en Android</b></p></a>

                                        </ul>
                                    </div>
                            </div>

                            <div className='pregFrec'>
                                <p type="button" data-bs-toggle="collapse" data-bs-target="#delegar_dominios" aria-expanded="false" aria-controls="collapseExample">
                                <p className='imagenFont3'><span className='textFrec'>Instructivo para delegar dominios en nic.ar</span></p>
                                
                                </p>
                                    <div className="collapse colapsados" id="delegar_dominios">
                                        <h5 className='tituloPop3 mb-3'>Delegar DNS</h5>
                                        <ul>
                                            <a id='catalogo' href={process.env.PUBLIC_URL+`pdf/delegar_dominios.pdf`} target="_blank" rel="noreferrer" className='visorPdf'><p><b>Nic.ar</b></p></a> 
                                        </ul>
                                    </div>
                            </div>

                            <div className='pregFrec'>
                                <p type="button" data-bs-toggle="collapse" data-bs-target="#configurar_panel" aria-expanded="false" aria-controls="collapseExample">
                                <p className='imagenFont3'><span className='textFrec'>Instructivo para configurar su panel de control</span></p>
                                
                                </p>
                                    <div className="collapse colapsados" id="configurar_panel">
                                        <h5 className='tituloPop3 mb-3'>Configurar panel</h5>
                                        <ul>
                                            <a id='catalogo' href={process.env.PUBLIC_URL+`pdf/configurar_panel.pdf`} target="_blank" rel="noreferrer" className='visorPdf'><p><b>Alta de correo</b></p></a> 
                                        </ul>
                                    </div>
                            </div>

                            <div className='pregFrec'>
                                <p type="button" data-bs-toggle="collapse" data-bs-target="#configurar_vpn" aria-expanded="false" aria-controls="collapseExample">
                                <p className='imagenFont3'><span className='textFrec'>Configurar conexión VPN.</span></p>
                                
                                </p>
                                    <div className="collapse colapsados" id="configurar_vpn">
                                        <h5 className='tituloPop3 mb-3'>Configurar VPN</h5>
                                        <ul>
                                            <a id='catalogo' href={process.env.PUBLIC_URL+`pdf/Instructivo_configurar_conexion_VPN_en_Windows.pdf`} target="_blank" rel="noreferrer" className='visorPdf'><p><b>Configurar VPN PPTP en Windows</b></p></a> 

                                            <a id='catalogo' href={process.env.PUBLIC_URL+`pdf/Instructivo_conexion_vpn_sstp_windows.pdf`} target="_blank" rel="noreferrer" className='visorPdf'><p><b>Configurar VPN SSTP en Windows</b></p></a> 

                                            <a id='catalogo' href={process.env.PUBLIC_URL+`pdf/Instructivo_conexion_VPN_con_Fortinet.pdf`} target="_blank" rel="noreferrer" className='visorPdf'><p><b>Configurar VPN con cliente Fortinet</b></p></a> 
                                        </ul>
                                    </div>
                            </div>

                            <div className='pregFrec'>
                                <p type="button" data-bs-toggle="collapse" data-bs-target="#descargas" aria-expanded="false" aria-controls="collapseExample">
                                <p className='imagenFont3'><span className='textFrec'>Descargas.</span></p>
                                
                                </p>
                                    <div className="collapse colapsados" id="descargas">
                                        <h5 className='tituloPop3 mb-3'>Descargas</h5>
                                        <ul>
                                            <a id='catalogo' href={process.env.PUBLIC_URL+`pdf/FortiClientOnlineInstaller.rar`} download="FortiClientOnlineInstaller.rar" className='visorPdf'><p><b>Descargar Forticlient.exe</b></p></a> 
                                        </ul>
                                    </div>
                            </div>





                        </div>

                        
    </div>
  )
}
