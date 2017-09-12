import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Line } from 'nivo';
// const Bar = require('nivo');

interface OverviewData {
    month: string;
    value: number;
}

interface SsggChart_Line_A01State {
    chartData: any[];
    loading: boolean;
}

export class SsggChart_Line_A01 extends React.Component<{}> {

    public state: SsggChart_Line_A01State;

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
                <h1 className="ssgg_txt_color_04">Valor Generico D</h1>
                <h2 className="ssgg_txt_color_07">Texto explicativo valor generico D</h2>
            </div>

            <Line
                data={[
                    {
                        "id": "whisky",
                        "color": "hsl(1, 70%, 50%)",
                        "data": [
                            {
                                "color": "hsl(68, 70%, 50%)",
                                "x": "DZ",
                                "y": 56
                            },
                            {
                                "color": "hsl(236, 70%, 50%)",
                                "x": "AE",
                                "y": 4
                            },
                            {
                                "color": "hsl(125, 70%, 50%)",
                                "x": "CM",
                                "y": 39
                            },
                            {
                                "color": "hsl(51, 70%, 50%)",
                                "x": "TC",
                                "y": 55
                            },
                            {
                                "color": "hsl(346, 70%, 50%)",
                                "x": "AM",
                                "y": 12
                            },
                            {
                                "color": "hsl(268, 70%, 50%)",
                                "x": "KY",
                                "y": 22
                            },
                            {
                                "color": "hsl(119, 70%, 50%)",
                                "x": "BZ",
                                "y": 6
                            },
                            {
                                "color": "hsl(338, 70%, 50%)",
                                "x": "CZ",
                                "y": 32
                            },
                            {
                                "color": "hsl(162, 70%, 50%)",
                                "x": "SX",
                                "y": 16
                            },
                            {
                                "color": "hsl(321, 70%, 50%)",
                                "x": "MG",
                                "y": 31
                            },
                            {
                                "color": "hsl(84, 70%, 50%)",
                                "x": "NO",
                                "y": 36
                            },
                            {
                                "color": "hsl(76, 70%, 50%)",
                                "x": "ML",
                                "y": 16
                            }
                        ]
                    },
                    {
                        "id": "rhum",
                        "color": "hsl(190, 70%, 50%)",
                        "data": [
                            {
                                "color": "hsl(213, 70%, 50%)",
                                "x": "DZ",
                                "y": 39
                            },
                            {
                                "color": "hsl(173, 70%, 50%)",
                                "x": "AE",
                                "y": 29
                            },
                            {
                                "color": "hsl(33, 70%, 50%)",
                                "x": "CM",
                                "y": 27
                            },
                            {
                                "color": "hsl(239, 70%, 50%)",
                                "x": "TC",
                                "y": 58
                            },
                            {
                                "color": "hsl(358, 70%, 50%)",
                                "x": "AM",
                                "y": 4
                            },
                            {
                                "color": "hsl(126, 70%, 50%)",
                                "x": "KY",
                                "y": 28
                            },
                            {
                                "color": "hsl(100, 70%, 50%)",
                                "x": "BZ",
                                "y": 18
                            },
                            {
                                "color": "hsl(237, 70%, 50%)",
                                "x": "CZ",
                                "y": 42
                            },
                            {
                                "color": "hsl(123, 70%, 50%)",
                                "x": "SX",
                                "y": 30
                            },
                            {
                                "color": "hsl(136, 70%, 50%)",
                                "x": "MG",
                                "y": 57
                            },
                            {
                                "color": "hsl(153, 70%, 50%)",
                                "x": "NO",
                                "y": 59
                            },
                            {
                                "color": "hsl(146, 70%, 50%)",
                                "x": "ML",
                                "y": 54
                            }
                        ]
                    },
                    {
                        "id": "gin",
                        "color": "hsl(330, 70%, 50%)",
                        "data": [
                            {
                                "color": "hsl(140, 70%, 50%)",
                                "x": "DZ",
                                "y": 32
                            },
                            {
                                "color": "hsl(170, 70%, 50%)",
                                "x": "AE",
                                "y": 1
                            },
                            {
                                "color": "hsl(196, 70%, 50%)",
                                "x": "CM",
                                "y": 42
                            },
                            {
                                "color": "hsl(70, 70%, 50%)",
                                "x": "TC",
                                "y": 6
                            },
                            {
                                "color": "hsl(326, 70%, 50%)",
                                "x": "AM",
                                "y": 47
                            },
                            {
                                "color": "hsl(7, 70%, 50%)",
                                "x": "KY",
                                "y": 3
                            },
                            {
                                "color": "hsl(4, 70%, 50%)",
                                "x": "BZ",
                                "y": 28
                            },
                            {
                                "color": "hsl(125, 70%, 50%)",
                                "x": "CZ",
                                "y": 17
                            },
                            {
                                "color": "hsl(191, 70%, 50%)",
                                "x": "SX",
                                "y": 52
                            },
                            {
                                "color": "hsl(271, 70%, 50%)",
                                "x": "MG",
                                "y": 37
                            },
                            {
                                "color": "hsl(174, 70%, 50%)",
                                "x": "NO",
                                "y": 32
                            },
                            {
                                "color": "hsl(114, 70%, 50%)",
                                "x": "ML",
                                "y": 53
                            }
                        ]
                    },
                    {
                        "id": "vodka",
                        "color": "hsl(51, 70%, 50%)",
                        "data": [
                            {
                                "color": "hsl(100, 70%, 50%)",
                                "x": "DZ",
                                "y": 18
                            },
                            {
                                "color": "hsl(265, 70%, 50%)",
                                "x": "AE",
                                "y": 54
                            },
                            {
                                "color": "hsl(204, 70%, 50%)",
                                "x": "CM",
                                "y": 46
                            },
                            {
                                "color": "hsl(154, 70%, 50%)",
                                "x": "TC",
                                "y": 4
                            },
                            {
                                "color": "hsl(43, 70%, 50%)",
                                "x": "AM",
                                "y": 12
                            },
                            {
                                "color": "hsl(214, 70%, 50%)",
                                "x": "KY",
                                "y": 17
                            },
                            {
                                "color": "hsl(224, 70%, 50%)",
                                "x": "BZ",
                                "y": 10
                            },
                            {
                                "color": "hsl(173, 70%, 50%)",
                                "x": "CZ",
                                "y": 47
                            },
                            {
                                "color": "hsl(181, 70%, 50%)",
                                "x": "SX",
                                "y": 45
                            },
                            {
                                "color": "hsl(4, 70%, 50%)",
                                "x": "MG",
                                "y": 0
                            },
                            {
                                "color": "hsl(38, 70%, 50%)",
                                "x": "NO",
                                "y": 21
                            },
                            {
                                "color": "hsl(313, 70%, 50%)",
                                "x": "ML",
                                "y": 53
                            }
                        ]
                    },
                    {
                        "id": "cognac",
                        "color": "hsl(198, 70%, 50%)",
                        "data": [
                            {
                                "color": "hsl(190, 70%, 50%)",
                                "x": "DZ",
                                "y": 60
                            },
                            {
                                "color": "hsl(2, 70%, 50%)",
                                "x": "AE",
                                "y": 24
                            },
                            {
                                "color": "hsl(287, 70%, 50%)",
                                "x": "CM",
                                "y": 32
                            },
                            {
                                "color": "hsl(30, 70%, 50%)",
                                "x": "TC",
                                "y": 26
                            },
                            {
                                "color": "hsl(323, 70%, 50%)",
                                "x": "AM",
                                "y": 48
                            },
                            {
                                "color": "hsl(126, 70%, 50%)",
                                "x": "KY",
                                "y": 33
                            },
                            {
                                "color": "hsl(327, 70%, 50%)",
                                "x": "BZ",
                                "y": 51
                            },
                            {
                                "color": "hsl(8, 70%, 50%)",
                                "x": "CZ",
                                "y": 39
                            },
                            {
                                "color": "hsl(167, 70%, 50%)",
                                "x": "SX",
                                "y": 24
                            },
                            {
                                "color": "hsl(224, 70%, 50%)",
                                "x": "MG",
                                "y": 19
                            },
                            {
                                "color": "hsl(354, 70%, 50%)",
                                "x": "NO",
                                "y": 23
                            },
                            {
                                "color": "hsl(219, 70%, 50%)",
                                "x": "ML",
                                "y": 7
                            }
                        ]
                    }
                ]

}
                margin={{
                    "top": 50,
                    "right": 60,
                    "bottom": 50,
                    "left": 60
                }}
                minY="auto"
                maxY="auto"
                stacked={true}
                curve="natural"
                axisBottom={{
                    "orient": "bottom",
                    "tickSize": 5,
                    "tickPadding": 5,
                    "tickRotation": 0,
                    "legend": "country code",
                    "legendOffset": 36,
                    "legendPosition": "center"
                }}
                axisLeft={{
                    "orient": "left",
                    "tickSize": 5,
                    "tickPadding": 5,
                    "tickRotation": 0,
                    "legend": "count",
                    "legendOffset": -40,
                    "legendPosition": "center"
                }}
                enableGridX={true}
                enableGridY={true}
                colors="d320c"
                colorBy="id"
                lineWidth={2}
                enableDots={true}
                dotSize={10}
                dotColor="inherit:darker(0.3)"
                dotBorderWidth={2}
                dotBorderColor="#ffffff"
                enableDotLabel={true}
                dotLabel="y"
                dotLabelYOffset={-12}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                isInteractive={true}
                enableStackTooltip={true}
            />


        </div>;
    }
}
