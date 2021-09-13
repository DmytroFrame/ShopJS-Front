import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { authRouter, publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts'


export default function AppRouter() {
    const isAuth = false
    return (
        <Switch>
            {isAuth && authRouter.map(({path, Component}) => 
                <Route ket={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) => 
               <Route ket={path} path={path} component={Component} exact/> 
            )}
            <Redirect to={SHOP_ROUTE} />
        </Switch>
    )
}
