import * as React from 'react';
import { NavMenu } from './NavMenu';
import { Header } from './Header';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div className='container-fluid'>
            <div className="row">
                <div className="row visible-lg ssgg_video_type_a">
                    <video autoPlay loop>
                        <source src="https://innovamediacontent.blob.core.windows.net/asset-7c3e0582-5b18-4bcd-aac4-afc4ece14195/SsGg_Fondo_Header_LG.mp4?sv=2015-07-08&sr=c&si=df60763d-a707-4e98-ae74-afc3ea61c95d&sig=WeTc5HCjTL5slhjwoiZUIDTXYcQeXLrikZkAH0vEzNY%3D&st=2017-09-05T10%3A34%3A33Z&se=2117-09-05T10%3A34%3A33Z" type="video/mp4" />
                    </video>
                </div>
                <div className="row visible-md visible-sm ssgg_video_type_a">
                    <video autoPlay loop>
                        <source src="https://innovamediacontent.blob.core.windows.net/asset-a15da301-6609-4055-b6ad-57395e99162b/SsGg_Fondo_Header_MD.mp4?sv=2015-07-08&sr=c&si=cd1f918a-35e1-4ee6-90ec-8169f5421a1b&sig=K3bs1s5syqipthuQSQMnjimAyDBXgA4iwU%2F84vyHYeI%3D&st=2017-09-05T10%3A35%3A48Z&se=2117-09-05T10%3A35%3A48Z" type="video/mp4" />
                    </video>
                </div>
                <div className="row  visible-xs ssgg_video_type_a">
                    <video autoPlay loop>
                        <source src="https://innovamediacontent.blob.core.windows.net/asset-41857750-ea8d-4e03-9f9f-b62d6b4ad254/SsGg_Fondo_Header_SM.mp4?sv=2015-07-08&sr=c&si=46223b6f-1205-4b3d-bf7f-93635822a0f0&sig=fz9u%2FIIC4Ol8v5PQyuMHn7WrfXNkpfpxMquGQZOaEDY%3D&st=2017-09-05T10%3A36%3A28Z&se=2117-09-05T10%3A36%3A28Z" type="video/mp4" />
                    </video>
                </div>
            </div>


            <div className='row container-fluid ssgg_header'>
                <Header />
            </div>
            <div className='row container-fluid ssgg_contenedor_body'>
                <div className='ssgg_contenedor_01 col-xs-12 col-sm-3 col-md-3 col-lg-2'>
                    <NavMenu />


                </div>
                <div className='ssgg_contenedor_01 col-xs-12 col-sm-9 col-md-9 col-lg-10'>
                        {this.props.children}
                </div>
            </div>

        </div>;

    }
}

//<div className='container'>
//    <NavTop />
//</div>
