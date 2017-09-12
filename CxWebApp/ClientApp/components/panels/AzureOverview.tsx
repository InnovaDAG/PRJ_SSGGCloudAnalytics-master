import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { VictoryChart, VictoryBar, VictoryPie, VictoryAxis, VictoryTheme } from 'victory';

interface OverviewData {
    month: string;
    value: number;
}

interface AzureOverviewState {
    chartData: OverviewData[];
    loading: boolean;
}

export class AzureOverview extends React.Component<RouteComponentProps<{}>, {}> {

    public state: AzureOverviewState;

    // TODO: Check if constructor requires, or it's advised to add "props" as parameter. This context require a type.
    constructor(props: any) {
        super(props);
        this.state = { chartData: [], loading: true };
    }


    public render() {
        // TODO: Solve problem when assigning this.state.chartData

        return <div className='row ssgg_contenedor_dev'>

            <div className="row">
                <h1 className="ssgg_txt_color_01">Azure</h1>
                <h1 className="ssgg_txt_color_01">Vision de Conjunto</h1>
            </div>


            <div className='col-sm-6'>
                <VictoryChart domainPadding={20} theme={VictoryTheme.material} width={500} height={350} >
                    <VictoryAxis />
                    <VictoryAxis dependentAxis tickFormat={(x) => (`$${x}`)} />
                    <VictoryBar data={ this.state.chartData } x="month" y="value" />
                </VictoryChart>
            </div>
            <div className='col-sm-6'>
                    <VictoryPie data={ this.state.chartData }
                     theme={VictoryTheme.material} 
                     width={250} height={250}
                     labels={(d) => d.x } 
                     labelRadius={50}
                     style={{ labels: { fill: "black", fontSize: 8  } }}
                     y="value" x="month" />
            </div>
            <div className='col-sm-6'>
                    <VictoryPie data={ this.state.chartData }
                     theme={VictoryTheme.material} 
                     width={250} height={250}
                     labels={(d) => d.x } 
                     labelRadius={50}
                     style={{ labels: { fill: "black", fontSize: 8  } }}
                     y="value" x="month" />
            </div>
            <div className='col-sm-6'>
                <VictoryChart domainPadding={20} theme={VictoryTheme.material} width={500} height={350} >
                    <VictoryAxis />
                    <VictoryAxis dependentAxis tickFormat={(x) => (`$${x}`)} />
                    <VictoryBar data={ this.state.chartData } x="month" y="value" />
                </VictoryChart>
            </div>


        </div>;
    }
}
