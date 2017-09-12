import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class AzureIncidents extends React.Component<RouteComponentProps<{}>, {}> {

    // TODO: Check if constructor requires, or it's advised to add "props" as parameter. This context require a type.
    constructor() {
        super();
        this.state = {
            chartData: []
        };
    }


    public render() {
        return <div className='row ssgg_contenedor_dev'>

            <div className="row">
                <h1 className="ssgg_txt_color_01">Azure</h1>
                <h1 className="ssgg_txt_color_01">Incidencias</h1>
            </div>

            <div className='col-sm-6'>
                <h2>Placeholder for a left chart fitting in a 4 units column as defined by Bootstrap</h2>
            </div>
            <div className='col-sm-6'>
                <h2>Placeholder for a left chart fitting in a 4 units column as defined by Bootstrap</h2>
            </div>
        </div>;
    }
}
