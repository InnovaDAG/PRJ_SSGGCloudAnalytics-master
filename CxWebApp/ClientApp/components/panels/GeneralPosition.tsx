import * as React from 'react';

import { RouteComponentProps } from 'react-router';
import { SsggChart_Bar_A01 } from '../charts/SsggChart_Bar_A01';
import { SsggChart_Bar_A02 } from '../charts/SsggChart_Bar_A02';



export class GeneralPosition extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div className="row ssgg_contenedor_dev">
            <div className="row">
                <h1 className="ssgg_txt_color_01">Posicion General</h1>
            </div>

            <div className="row">
                <h2 className="ssgg_txt_color_02">Espacio en desarollo</h2>
            </div>


            <div className="row">

                <SsggChart_Bar_A01 />
                <SsggChart_Bar_A02 />
            </div>

            <div className="row">
                <h3 className="ssgg_txt_color_04">Nuestra constante busqueda de la mejora continua nos impulsa a desarrollar nuevos espacios de interes para nuestros clientes. En breve podras descubrir esta nueva seccion.</h3>
            </div>
        </div>;
    }
}

