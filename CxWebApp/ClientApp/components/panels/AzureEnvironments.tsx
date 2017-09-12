import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Bar } from 'nivo';
// const Bar = require('nivo');

interface OverviewData {
    month: string;
    value: number;
}

interface PanelState {
    chartData: any[];
    loading: boolean;
}

export class AzureEnvironments extends React.Component<RouteComponentProps<{}>, {}> {

    public state: PanelState;

    constructor(props: any) {
        super(props);
        this.state = { chartData: [], loading: true };
    }



    public render() {
        return <div className='row ssgg_contenedor_dev'>

            <div className="row">
                <h1 className="ssgg_txt_color_01">Azure</h1>
                <h1 className="ssgg_txt_color_01">Analisis del entorno</h1>
            </div>



            <div className='col-sm-6'>
                <h2>Placeholder for a left chart fitting in a 6 units column as defined by Bootstrap</h2>


            </div>
            <div className='col-sm-6'>
                <h2>Placeholder for a left chart fitting in a 6 units column as defined by Bootstrap</h2>
            </div>


        </div>;
    }
}
