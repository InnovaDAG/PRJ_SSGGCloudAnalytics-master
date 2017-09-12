import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Alert } from '../Alert';
import { SsggChart_Bar_A01 } from '../charts/SsggChart_Bar_A01';
import { SsggChart_Bar_A02 } from '../charts/SsggChart_Bar_A02';
import { SsggChart_Pie_A01 } from '../charts/SsggChart_Pie_A01';
import { SsggChart_Pie_A02 } from '../charts/SsggChart_Pie_A02';
import { SsggChart_Pie_A03 } from '../charts/SsggChart_Pie_A03';

export class GeneralPosition extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div className="row">

            <div className="ssgg_contenedor_alert">
                <Alert />
            </div>

            <div className="ssgg_contenedor_panel">

                <div className="row">
                    <h1 className="ssgg_txt_color_01">Posicion General</h1>

                </div>


                <div className="row">

                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <SsggChart_Pie_A01 />
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <SsggChart_Pie_A02 />

                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <SsggChart_Pie_A03 />

                    </div>



                </div>


                <div className="row">





                </div>




            </div>

        </div>;
    }
}

