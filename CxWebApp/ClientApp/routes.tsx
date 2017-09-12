import * as React from 'react';
import { Route } from 'react-router-dom';

//-----RUTAS NAVEGACION GENERAL.
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Header } from './components/Header';
import { News } from './components/News';

//----RUTAS PANELES
import { AmazonIndex } from './components/panels/AmazonIndex';
import { AmazonOverview } from './components/panels/AmazonOverview';
import { AzureIndex } from './components/panels/AzureIndex';
import { AzureOverview } from './components/panels/AzureOverview';
import { AzureEnvironments } from './components/panels/AzureEnvironments';
import { AzureIncidents } from './components/panels/AzureIncidents';
import { AzureResources } from './components/panels/AzureResources';
import { AzureSubscriptions } from './components/panels/AzureSubscriptions';
import { CloudComparatives } from './components/panels/CloudComparatives';
import { ConsumptionAnalysis } from './components/panels/ConsumptionAnalysis';
import { ExpenseAnalysis } from './components/panels/ExpenseAnalysis';
import { GCloudIndex } from './components/panels/GCloudIndex';
import { GCloudOverview } from './components/panels/GCloudOverview';
import { GSuiteIndex } from './components/panels/GSuiteIndex';
import { GSuiteOverview } from './components/panels/GSuiteOverview';
import { GeneralPosition } from './components/panels/GeneralPosition';
import { ManagementAnalysis } from './components/panels/ManagementAnalysis';
import { Office365Index } from './components/panels/Office365Index';
import { Office365Applications } from './components/panels/Office365Applications';
import { Office365Licenses } from './components/panels/Office365Licenses';
import { Office365Overview } from './components/panels/Office365Overview';




export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/amazon/index' component={ AmazonIndex } />
    <Route path='/amazon/overview' component={ AmazonOverview } />
    <Route path='/azure/index' component={ AzureIndex } />
    <Route path='/azure/overview' component={ AzureOverview } />
    <Route path='/azure/environments' component={ AzureEnvironments } />
    <Route path='/azure/incidents' component={ AzureIncidents } />
    <Route path='/azure/resources' component={ AzureResources } />
    <Route path='/azure/subscriptions' component={ AzureSubscriptions } />
    <Route path='/comparative/index' component={ CloudComparatives } />

    <Route path='/comparative/consumption' component={ ConsumptionAnalysis } />
    <Route path='/comparative/costes' component={ ExpenseAnalysis } />
    <Route path='/googlecloud/index' component={ GCloudIndex } />
    <Route path='/googlecloud/overview' component={ GCloudOverview } />
    <Route path='/gsuite/index' component={ GSuiteIndex } />
    <Route path='/gsuite/overview' component={ GSuiteOverview } />
    <Route path='/generalposition' component={ GeneralPosition } />
    <Route path='/managementanalysis' component={ ManagementAnalysis } />
    <Route path='/ofice365/index' component={ Office365Index } />
    <Route path='/ofice365/applications' component={ Office365Applications } />
    <Route path='/ofice365/licenses' component={ Office365Licenses } />
    <Route path='/ofice365/overview' component={ Office365Overview } />
    <Route path='/news' component={ News } />
</Layout>;

    // Routes excluded from live site, but kept for illustration proposes.
    //<Route path='/counter' component={ Counter } />
    //<Route path='/fetchdata' component={ FetchData } />