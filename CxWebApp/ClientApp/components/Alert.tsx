import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class Alert extends React.Component<{}, {}> {
    public render() {
        return <div className="row">
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 ssgg_img_alert ">
                    <img src="../img/iconos/invdg_btn_alert_a.png" />
            </div>
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 ssgg_borde_bottom_a">
                    <h1 className="ssgg_txt_color_05">Area de alertas / Avisos / Notificaciones</h1>
                    <h2 className="ssgg_txt_color_04">Nombre - Info de usuario registrado</h2>
            </div>
        </div>;
    }
}

