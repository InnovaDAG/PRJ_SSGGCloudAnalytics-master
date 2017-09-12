import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Pie } from 'nivo';
// const Bar = require('nivo');

interface OverviewData {
    month: string;
    value: number;
}

interface SsggChart_Pie_A02State {
    chartData: any[];
    loading: boolean;
}

export class SsggChart_Pie_A02 extends React.Component<{}> {

    public state: SsggChart_Pie_A02State;

    constructor(props: any) {
        super(props);
        this.state = { chartData: [], loading: true };
    }

    componentDidMount() {
        fetch('https://authwebapipilot.azurewebsites.net/api/webapp/get')
            .then(result => result.json())
            .then(items => this.setState({ chartData: items }))
    }

    public render() {
        return <div className='row'>
            <div className="ssgg_contenedor_graf">
                <h1 className="ssgg_txt_color_04">Valor Generico B</h1>
                <h2 className="ssgg_txt_color_07">Texto explicativo valor generico B</h2>
            </div>

                <Pie
                    data={[

                    {
                        "id": "c",
                        "label": "c",
                        "value": 301,
                        "color": "hsl(246, 70%, 50%)"
                    },
                    {
                        "id": "sass",
                        "label": "sass",
                        "value": 484,
                        "color": "hsl(246, 70%, 50%)"
                    },
                    {
                        "id": "elixir",
                        "label": "elixir",
                        "value": 400,
                        "color": "hsl(246, 70%, 50%)"
                    },
                    {
                        "id": "make",
                        "label": "make",
                        "value": 460,
                        "color": "hsl(246, 70%, 50%)"
                    },
                    {
                        "id": "stylus",
                        "label": "stylus",
                        "value": 447,
                        "color": "hsl(246, 70%, 50%)"
                    }               
                ]}
                width={400}
                height={300}
                    margin={{
                        "top": 25,
                        "right": 40,
                        "bottom": 25,
                        "left": 40
                }}

                    innerRadius={0}
                    padAngle={11}
                    cornerRadius={32}
                    colors="d320c"
                    colorBy="id"
                    borderWidth={0}
                    borderColor="inherit:darker(0.6)"
                    enableRadialLabels={true}
                    radialLabel="value"
                    radialLabelsSkipAngle={10}
                    radialLabelsTextXOffset={6}
                    radialLabelsTextColor="#333333"
                    radialLabelsLinkOffset={0}
                    radialLabelsLinkDiagonalLength={0}
                    radialLabelsLinkHorizontalLength={9}
                    radialLabelsLinkStrokeWidth={1}
                    radialLabelsLinkColor="inherit"
                    enableSlicesLabels={true}
                    sliceLabel="id"
                    slicesLabelsSkipAngle={10}
                    slicesLabelsTextColor="#333333"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    isInteractive={true}
            />


        </div>;
    }
}
