import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Pie } from 'nivo';
// const Bar = require('nivo');

interface OverviewData {
    month: string;
    value: number;
}

interface SsggChart_Pie_A01State {
    chartData: any[];
    loading: boolean;
}

export class SsggChart_Pie_A01 extends React.Component<{}> {

    public state: SsggChart_Pie_A01State;

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
                <h1 className="ssgg_txt_color_04">Valor Generico A</h1>
                <h2 className="ssgg_txt_color_07">Texto explicativo valor generico A</h2>
            </div>

                <Pie
                    data={[
                        {
                            "id": "rust",
                            "label": "rust",
                            "value": 375,
                            "color": "hsl(43, 70%, 50%)"
                        },
                        {
                            "id": "java",
                            "label": "java",
                            "value": 220,
                            "color": "hsl(191, 70%, 50%)"
                        },
                        {
                            "id": "scala",
                            "label": "scala",
                            "value": 504,
                            "color": "hsl(238, 70%, 50%)"
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

                    innerRadius={0.2}
                    padAngle={0.7}
                    cornerRadius={3}
                    colors="d320c"
                    colorBy="id"
                    borderWidth={0}
                    borderColor="inherit:darker(0.6)"
                    enableRadialLabels={true}
                    radialLabel="id"
                    radialLabelsSkipAngle={20}
                    radialLabelsTextXOffset={6}
                    radialLabelsTextColor="#050c5f"
                    radialLabelsLinkOffset={0}
                    radialLabelsLinkDiagonalLength={16}
                    radialLabelsLinkHorizontalLength={24}
                    radialLabelsLinkStrokeWidth={1}
                    radialLabelsLinkColor="inherit"
                    enableSlicesLabels={true}
                    sliceLabel="value"
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
