import React from 'react';
import Header from "../../components/Header"; 
import "./index.css";
import { Route, Redirect } from 'react-router-dom';

const localStorage = global.window.localStorage
const token = localStorage.getItem('token')

const AppFrame = ({ component: Component, ...rest }) => {
    // const renderComponent = (routeProps) => {
    //     let routeCmp
    //     if (token) {
    //       routeCmp = <Component {...routeProps} />
    //     } else {
    //       if (rest.path === '/' || rest.path === '/Sharemap/:id') {
    //         routeCmp = <Component {...routeProps} />
    //       } else {
    //         routeCmp = <Redirect to='/' />
    //       }
    //     }
    //     return routeCmp
    //   }
    return (
        <div>
            <Header />
            <Route {...rest} render={routeProps => (<Component {...routeProps}></Component>)}></Route>
            {/* <Route {...rest} render={routeProps => renderComponent(routeProps)} ></Route> */}
        </div>
    )
}


export default AppFrame;