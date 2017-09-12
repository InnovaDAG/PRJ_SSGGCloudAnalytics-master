// TODO: The top navigation needs some research as currently it overlaps the content and makes the page
//       not good for browsing.

import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavTopRight extends React.Component<{}, {}> {
    public render() {
        return <nav className='navbar navbar-default'>
            <ul className='nav navbar-nav navbar-left'>
                <li className='active'><NavLink to={'/'}><span><img src="../img/iconos/invdg_ico_inicio_a.png" className="ssgg_imgbtn_type_b" /></span>Home</NavLink></li>
                <li><a href='http://innovadag.com/'><span><img src="../img/iconos/invdg_ico_innovadag_a.png" className="ssgg_imgbtn_type_b"/></span>Innovadag</a></li>
                <li><NavLink to={'/news'}><span><img src="../img/iconos/invdg_ico_noticias_a.png" className="ssgg_imgbtn_type_b"/></span>Noticias</NavLink></li>
            </ul>
        </nav>;

    }
}
//<div className='navbar-header'>
//    <a className='navbar-brand' href='#'>Cloud Analytics</a>
//</div>
//    <ul className='av navbar-nav'>
//    </ul>
