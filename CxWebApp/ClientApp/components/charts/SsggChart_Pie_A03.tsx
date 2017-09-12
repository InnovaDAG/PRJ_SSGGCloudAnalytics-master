import * as React from 'react';
import { render } from 'react-dom';
import { RouteComponentProps } from 'react-router';
import { Sunburst } from 'nivo';
// const Bar = require('nivo');

interface OverviewData {
    month: string;
    value: number;
}

interface SsggChart_Pie_A03State {
    chartData: any[];
    loading: boolean;
}

export class SsggChart_Pie_A03 extends React.Component<{}> {

    public state: SsggChart_Pie_A03State;

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
                <h1 className="ssgg_txt_color_04">Valor Generico C</h1>
                <h2 className="ssgg_txt_color_07">Texto explicativo valor generico C</h2>
            </div>

            <Sunburst
                data={{
                    "name": "nivo",
                    "color": "hsl(292, 70%, 50%)",
                    "children": [
                        {
                            "name": "viz",
                            "color": "hsl(28, 70%, 50%)",
                            "children": [
                                {
                                    "name": "stack",
                                    "color": "hsl(204, 70%, 50%)",
                                    "children": [
                                        {
                                            "name": "chart",
                                            "color": "hsl(327, 70%, 50%)",
                                            "loc": 169876
                                        },
                                        {
                                            "name": "xAxis",
                                            "color": "hsl(170, 70%, 50%)",
                                            "loc": 15418
                                        },
                                        {
                                            "name": "yAxis",
                                            "color": "hsl(345, 70%, 50%)",
                                            "loc": 132321
                                        },
                                        {
                                            "name": "layers",
                                            "color": "hsl(117, 70%, 50%)",
                                            "loc": 16390
                                        }
                                    ]
                                },
                                {
                                    "name": "pie",
                                    "color": "hsl(326, 70%, 50%)",
                                    "children": [
                                        {
                                            "name": "chart",
                                            "color": "hsl(89, 70%, 50%)",
                                            "children": [
                                                {
                                                    "name": "pie",
                                                    "color": "hsl(57, 70%, 50%)",
                                                    "children": [
                                                        {
                                                            "name": "outline",
                                                            "color": "hsl(178, 70%, 50%)",
                                                            "loc": 27942
                                                        },
                                                        {
                                                            "name": "slices",
                                                            "color": "hsl(154, 70%, 50%)",
                                                            "loc": 116835
                                                        },
                                                        {
                                                            "name": "bbox",
                                                            "color": "hsl(357, 70%, 50%)",
                                                            "loc": 30713
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "donut",
                                                    "color": "hsl(33, 70%, 50%)",
                                                    "loc": 72093
                                                },
                                                {
                                                    "name": "gauge",
                                                    "color": "hsl(203, 70%, 50%)",
                                                    "loc": 24876
                                                }
                                            ]
                                        },
                                        {
                                            "name": "legends",
                                            "color": "hsl(354, 70%, 50%)",
                                            "loc": 157113
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "colors",
                            "color": "hsl(67, 70%, 50%)",
                            "children": [
                                {
                                    "name": "rgb",
                                    "color": "hsl(61, 70%, 50%)",
                                    "loc": 140505
                                },
                                {
                                    "name": "hsl",
                                    "color": "hsl(235, 70%, 50%)",
                                    "loc": 117080
                                }
                            ]
                        },
                        {
                            "name": "utils",
                            "color": "hsl(176, 70%, 50%)",
                            "children": [
                                {
                                    "name": "randomize",
                                    "color": "hsl(55, 70%, 50%)",
                                    "loc": 70844
                                },
                                {
                                    "name": "resetClock",
                                    "color": "hsl(135, 70%, 50%)",
                                    "loc": 106966
                                },
                                {
                                    "name": "noop",
                                    "color": "hsl(347, 70%, 50%)",
                                    "loc": 137134
                                },
                                {
                                    "name": "tick",
                                    "color": "hsl(81, 70%, 50%)",
                                    "loc": 56846
                                },
                                {
                                    "name": "forceGC",
                                    "color": "hsl(261, 70%, 50%)",
                                    "loc": 60020
                                },
                                {
                                    "name": "stackTrace",
                                    "color": "hsl(80, 70%, 50%)",
                                    "loc": 12078
                                },
                                {
                                    "name": "dbg",
                                    "color": "hsl(192, 70%, 50%)",
                                    "loc": 192318
                                }
                            ]
                        },
                        {
                            "name": "generators",
                            "color": "hsl(327, 70%, 50%)",
                            "children": [
                                {
                                    "name": "address",
                                    "color": "hsl(205, 70%, 50%)",
                                    "loc": 67374
                                },
                                {
                                    "name": "city",
                                    "color": "hsl(344, 70%, 50%)",
                                    "loc": 145840
                                },
                                {
                                    "name": "animal",
                                    "color": "hsl(249, 70%, 50%)",
                                    "loc": 156351
                                },
                                {
                                    "name": "movie",
                                    "color": "hsl(268, 70%, 50%)",
                                    "loc": 117751
                                },
                                {
                                    "name": "user",
                                    "color": "hsl(267, 70%, 50%)",
                                    "loc": 156408
                                }
                            ]
                        },
                        {
                            "name": "set",
                            "color": "hsl(156, 70%, 50%)",
                            "children": [
                                {
                                    "name": "clone",
                                    "color": "hsl(224, 70%, 50%)",
                                    "loc": 30856
                                },
                                {
                                    "name": "intersect",
                                    "color": "hsl(115, 70%, 50%)",
                                    "loc": 156711
                                },
                                {
                                    "name": "merge",
                                    "color": "hsl(291, 70%, 50%)",
                                    "loc": 155129
                                },
                                {
                                    "name": "reverse",
                                    "color": "hsl(53, 70%, 50%)",
                                    "loc": 107684
                                },
                                {
                                    "name": "toArray",
                                    "color": "hsl(31, 70%, 50%)",
                                    "loc": 117892
                                },
                                {
                                    "name": "toObject",
                                    "color": "hsl(180, 70%, 50%)",
                                    "loc": 74463
                                },
                                {
                                    "name": "fromCSV",
                                    "color": "hsl(219, 70%, 50%)",
                                    "loc": 127961
                                },
                                {
                                    "name": "slice",
                                    "color": "hsl(63, 70%, 50%)",
                                    "loc": 128675
                                },
                                {
                                    "name": "append",
                                    "color": "hsl(236, 70%, 50%)",
                                    "loc": 137564
                                },
                                {
                                    "name": "prepend",
                                    "color": "hsl(224, 70%, 50%)",
                                    "loc": 181865
                                },
                                {
                                    "name": "shuffle",
                                    "color": "hsl(353, 70%, 50%)",
                                    "loc": 75121
                                },
                                {
                                    "name": "pick",
                                    "color": "hsl(19, 70%, 50%)",
                                    "loc": 51004
                                },
                                {
                                    "name": "plouc",
                                    "color": "hsl(346, 70%, 50%)",
                                    "loc": 193926
                                }
                            ]
                        },
                        {
                            "name": "text",
                            "color": "hsl(186, 70%, 50%)",
                            "children": [
                                {
                                    "name": "trim",
                                    "color": "hsl(236, 70%, 50%)",
                                    "loc": 152470
                                },
                                {
                                    "name": "slugify",
                                    "color": "hsl(304, 70%, 50%)",
                                    "loc": 177085
                                },
                                {
                                    "name": "snakeCase",
                                    "color": "hsl(313, 70%, 50%)",
                                    "loc": 79744
                                },
                                {
                                    "name": "camelCase",
                                    "color": "hsl(45, 70%, 50%)",
                                    "loc": 178255
                                },
                                {
                                    "name": "repeat",
                                    "color": "hsl(13, 70%, 50%)",
                                    "loc": 82967
                                },
                                {
                                    "name": "padLeft",
                                    "color": "hsl(246, 70%, 50%)",
                                    "loc": 76286
                                },
                                {
                                    "name": "padRight",
                                    "color": "hsl(313, 70%, 50%)",
                                    "loc": 199885
                                },
                                {
                                    "name": "sanitize",
                                    "color": "hsl(346, 70%, 50%)",
                                    "loc": 56401
                                },
                                {
                                    "name": "ploucify",
                                    "color": "hsl(159, 70%, 50%)",
                                    "loc": 183639
                                }
                            ]
                        },
                        {
                            "name": "misc",
                            "color": "hsl(1, 70%, 50%)",
                            "children": [
                                {
                                    "name": "whatever",
                                    "color": "hsl(325, 70%, 50%)",
                                    "children": [
                                        {
                                            "name": "hey",
                                            "color": "hsl(281, 70%, 50%)",
                                            "loc": 184899
                                        },
                                        {
                                            "name": "WTF",
                                            "color": "hsl(155, 70%, 50%)",
                                            "loc": 4926
                                        },
                                        {
                                            "name": "lol",
                                            "color": "hsl(100, 70%, 50%)",
                                            "loc": 50813
                                        },
                                        {
                                            "name": "IMHO",
                                            "color": "hsl(36, 70%, 50%)",
                                            "loc": 17859
                                        }
                                    ]
                                },
                                {
                                    "name": "other",
                                    "color": "hsl(116, 70%, 50%)",
                                    "loc": 167636
                                },
                                {
                                    "name": "crap",
                                    "color": "hsl(83, 70%, 50%)",
                                    "children": [
                                        {
                                            "name": "crapA",
                                            "color": "hsl(12, 70%, 50%)",
                                            "loc": 185701
                                        },
                                        {
                                            "name": "crapB",
                                            "color": "hsl(118, 70%, 50%)",
                                            "children": [
                                                {
                                                    "name": "crapB1",
                                                    "color": "hsl(136, 70%, 50%)",
                                                    "loc": 141103
                                                },
                                                {
                                                    "name": "crapB2",
                                                    "color": "hsl(10, 70%, 50%)",
                                                    "loc": 46547
                                                },
                                                {
                                                    "name": "crapB3",
                                                    "color": "hsl(355, 70%, 50%)",
                                                    "loc": 164483
                                                },
                                                {
                                                    "name": "crapB4",
                                                    "color": "hsl(187, 70%, 50%)",
                                                    "loc": 70892
                                                }
                                            ]
                                        },
                                        {
                                            "name": "crapC",
                                            "color": "hsl(266, 70%, 50%)",
                                            "children": [
                                                {
                                                    "name": "crapC1",
                                                    "color": "hsl(344, 70%, 50%)",
                                                    "loc": 1750
                                                },
                                                {
                                                    "name": "crapC2",
                                                    "color": "hsl(287, 70%, 50%)",
                                                    "loc": 83122
                                                },
                                                {
                                                    "name": "crapC3",
                                                    "color": "hsl(6, 70%, 50%)",
                                                    "loc": 172005
                                                },
                                                {
                                                    "name": "crapC4",
                                                    "color": "hsl(156, 70%, 50%)",
                                                    "loc": 46881
                                                },
                                                {
                                                    "name": "crapC5",
                                                    "color": "hsl(314, 70%, 50%)",
                                                    "loc": 104060
                                                },
                                                {
                                                    "name": "crapC6",
                                                    "color": "hsl(190, 70%, 50%)",
                                                    "loc": 159650
                                                },
                                                {
                                                    "name": "crapC7",
                                                    "color": "hsl(3, 70%, 50%)",
                                                    "loc": 152896
                                                },
                                                {
                                                    "name": "crapC8",
                                                    "color": "hsl(328, 70%, 50%)",
                                                    "loc": 36912
                                                },
                                                {
                                                    "name": "crapC9",
                                                    "color": "hsl(121, 70%, 50%)",
                                                    "loc": 170263
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }}
                margin={{
                    "top": 40,
                    "right": 20,
                    "bottom": 20,
                    "left": 20
                }}
                identity="name"
                value="loc"
                cornerRadius={2}
                borderWidth={1}
                borderColor="white"
                colors="nivo"
                colorBy="id"
                childColor="inherit"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                isInteractive={true}
            />

        </div>;
    }
}
