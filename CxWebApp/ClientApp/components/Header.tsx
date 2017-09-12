
import * as React from 'react';
import { NavTopLeft } from './NavTopLeft';
import { NavTopRight } from './NavTopRight';


export class Header extends React.Component<{}, {}> {
    public render() {
        return <header className='row'>
            <div className="container-fluid ">
                <div className="row ssgg_header_top ">
                    <div className="col-xs-4 col-sm-3 col-md-3 col-lg-3">
                        <img src="../img/logos/invdg_logo_header.png" className="ssgg_img_type_a" />
                    </div>
                    <div className="col-xs-8 col-sm-9 col-md-9 col-lg-9">
                        <div className="ssgg_header_titulo_a ">
                            <h1 className="ssgg_txt_color_01">Innovadag Cloud Analytics</h1>
                            <h2 className="ssgg_txt_color_01">Estudiamos sus necesidades, perseguimos sus objetivos reduciendo los costes y gestionando el riesgo</h2>
                        </div>

                        <div className="row sgg_header_bottom">
                            <div className="col-xs-4 col-sm-7 col-md-7 col-lg-7">
                                <div className="ssgg_contmnu_type_a">
                                    <NavTopLeft />
                                </div>
                            </div>

                            <div className="col-xs-8 col-sm-5 col-md-5 col-lg-5">
                                <div className="ssgg_contmnu_type_b">
                                    <NavTopRight />
                                </div>


                            </div>
                        </div>

                    </div>

                </div>


            </div>


        </header>;

    }
}

            //<NavTop />
