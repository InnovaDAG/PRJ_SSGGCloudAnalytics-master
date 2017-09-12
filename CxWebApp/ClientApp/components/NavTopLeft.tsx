// TODO: The top navigation needs some research as currently it overlaps the content and makes the page
//       not good for browsing.

import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavTopLeft extends React.Component<{}, {}> {
    public render() {
        return <div className="row">

            <div className="col-xs-8 col-sm-8 visible-sm col-md-8 visible-md col-lg-8 visible-lg ssgg_conttxt_type_a">
                <h1 className="ssgg_txt_color_05">Accede a tu escritorio personalizadoI con tu usuario registrado</h1>
                <h2 className="ssgg_txt_color_01">Analiza tu negocio con visualizaciones graficas e intuitivas. Supervisa el estado de tu empresa mediante los paneles activos.</h2>
            </div>

            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 ssgg_contbtn_type_a">
                <NavLink to={'/'}>
                    <img src="../img/iconos/invdg_btn_pbi_in_c.png" className="ssgg_imgbtn_type_a"/>
                    <h1 className="ssgg_txt_color_01">Login</h1>
                </NavLink>

            </div>

        </div>
;

    }
}
//<ul className='nav navbar-nav navbar-right'>
//    <li className='active'><a href='#'>Home</a></li>
//    <li><a href='#'>Support</a></li>
//    <li><a href="#"><span className='glyphicon glyphicon-log-in'></span> Login</a></li>
//</ul>


