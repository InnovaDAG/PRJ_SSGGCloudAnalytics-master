import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='ssgg_contenedor_navlat'>
                <div className='navbar navbar-default'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link className='navbar-brand' to={ '/' }>Innovadag Cloud Analytics</Link>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <NavLink to={ '/generalposition' } exact activeClassName='active'>
                                <span className='glyphicon glyphicon-dashboard'></span> Posicion General
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/managementanalysis'} exact activeClassName='active'>
                                <span className='glyphicon glyphicon-indent-right'></span> Analitica de Gestion Empresarial
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to={ '/azure/index' } activeClassName='active'>
                                <span className='glyphicon glyphicon-cloud'></span> Azure Cloud
                            </NavLink>
                            <ul>
                                <li>
                                    <NavLink to={ '/azure/overview' } exact activeClassName='active'>
                                        <span></span> Vision General
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={ '/azure/environments' } exact activeClassName='active'>
                                        <span></span> Analisis del Entorno
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={ '/azure/incidents' } exact activeClassName='active'>
                                        <span></span> Incidencias
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/azure/subscriptions'} exact activeClassName='active'>
                                        <span></span> Analisis por Suscripciones
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/azure/resources'} exact activeClassName='active'>
                                        <span></span> Analisis por Recursos
                                    </NavLink>
                                </li>

                            </ul>
                        </li>

                        <li>
                            <NavLink to={'/ofice365/index'} activeClassName='active'>
                                <span className='glyphicon glyphicon-th-large'></span> Office 365
                            </NavLink>
                            <ul>
                                <li>
                                    <NavLink to={'/ofice365/overview'} exact activeClassName='active'>
                                        <span></span> Vision General
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/ofice365/applications'} exact activeClassName='active'>
                                        <span></span> Analitica de Aplicaciones
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/ofice365/licenses'} exact activeClassName='active'>
                                        <span></span> Analitica de Licencias
                                    </NavLink>
                                </li>
                            </ul>
                        </li>


                        <li>
                            <NavLink to={ '/amazon/index' } activeClassName='active'>
                                <span className='glyphicon glyphicon-equalizer'></span> Amazon Web Services
                            </NavLink>
                            <ul>
                                <li>
                                    <NavLink to={'/amazon/overview'} exact activeClassName='active'>
                                        <span></span> Vision General
                                    </NavLink>
                                </li>
                            </ul>

                        </li>

                        <li>
                            <NavLink to={'/googlecloud/index'} activeClassName='active'>
                                <span className='glyphicon glyphicon-cloud-upload'></span> Google Cloud
                            </NavLink>
                            <ul>
                                <li>
                                    <NavLink to={'/googlecloud/overview'} exact activeClassName='active'>
                                        <span></span> Vision General
                                    </NavLink>
                                </li>
                            </ul>

                        </li>

                        <li>
                            <NavLink to={'/gsuite/index'} activeClassName='active'>
                                <span className='glyphicon glyphicon-edit'></span> G-Suite
                            </NavLink>
                            <ul>
                                <li>
                                    <NavLink to={'/gsuite/overview'} exact activeClassName='active'>
                                        <span></span> Vision General
                                    </NavLink>
                                </li>
                            </ul>

                        </li>

                        <li>
                            <NavLink to={'/comparative/index'} exact activeClassName='active'>
                                <span className='glyphicon glyphicon-stats'></span> Analitica Comparativa Cloud
                            </NavLink>
                            <ul>
                                <li>
                                    <NavLink to={'/comparative/consumption'} exact activeClassName='active'>
                                        <span></span> Analisis Consumos / Usos
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/comparative/costes'} exact activeClassName='active'>
                                        <span></span> Analisis Gastos / Costes
                                    </NavLink>
                                </li>

                            </ul>

                        </li>



                    </ul>
                </div>
            </div>
        </div>;
    }
}

                        // Links belonging to the sample pages. Kept for reference.
                        //<li>
                        //    <NavLink to={ '/counter' } activeClassName='active'>
                        //        <span className='glyphicon glyphicon-stats'></span> AWS
                        //    </NavLink>
                        //</li>
                        //<li>
                        //    <NavLink to={ '/fetchdata' } activeClassName='active'>
                        //        <span className='glyphicon glyphicon-stats'></span> GCP
                        //    </NavLink>
                        //</li>