import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Office365Applications extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div className="row ssgg_contenedor_dev">
            <div className="row">
                <h1 className="ssgg_txt_color_01">Office 365</h1>
                <h1 className="ssgg_txt_color_01">Analitica de Aplicaciones</h1>
            </div>

            <div className="row">
                <h2 className="ssgg_txt_color_02">Espacio en desarollo</h2>
            </div>


            <div className="row">
                <img src="../img/gifs/invdg_desarrollo.gif" className="ssgg_img_type_b" />
            </div>

            <div className="row">
                <h3 className="ssgg_txt_color_04">Nuestra constante busqueda de la mejora continua nos impulsa a desarrollar nuevos espacios de interes para nuestros clientes. En breve podras descubrir esta nueva seccion.</h3>
            </div>
        </div>;
    }
}