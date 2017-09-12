import * as React from 'react';
import { VictoryChart, VictoryBar, VictoryPie, VictoryAxis, VictoryTheme } from 'victory';

interface OverviewData {
    month: string;
    value: number;
}

interface SsggChart_Bar_A01State {
    chartData: OverviewData[];
    loading: boolean;
}

export class SsggChart_Bar_A01 extends React.Component<{}> {

    public state: SsggChart_Bar_A01State;

    // TODO: Check if constructor requires, or it's advised to add "props" as parameter. This context require a type.
    constructor(props: any) {
        super(props);
        this.state = { chartData: [], loading: true };
    }


    public render() {
        // TODO: Solve problem when assigning this.state.chartData

        return <div className='row ssgg_contenedor_dev'>




            <div className='col-sm-6'>
                <VictoryChart domainPadding={20} theme={VictoryTheme.material} width={500} height={350} >
                    <VictoryAxis />
                    <VictoryAxis dependentAxis tickFormat={(x) => (`$${x}`)} />
                    <VictoryBar data={this.state.chartData} x="month" y="value" />
                </VictoryChart>
            </div>
            <div className='col-sm-6'>
                <VictoryPie data={this.state.chartData}
                    theme={VictoryTheme.material}
                    width={250} height={250}
                    labels={(d) => d.x}
                    labelRadius={50}
                    style={{ labels: { fill: "black", fontSize: 8 } }}
                    y="value" x="month" />
            </div>
            <div className='col-sm-6'>
                <VictoryPie data={this.state.chartData}
                    theme={VictoryTheme.material}
                    width={250} height={250}
                    labels={(d) => d.x}
                    labelRadius={50}
                    style={{ labels: { fill: "black", fontSize: 8 } }}
                    y="value" x="month" />
            </div>


        </div>;
    }
}
