import React, {useContext} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { authRouter, publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts'
import { Context } from '../index'

export default function AppRouter() {
    // const context = useContext(contextValue);
    const { user } = useContext(Context)

    console.log(user)
    return (
        <Switch>
            {user.isAuth && authRouter.map(({path, Component}) => 
                <Route ket={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) => 
               <Route ket={path} path={path} component={Component} exact/> 
            )}
            <Redirect to={SHOP_ROUTE} />
        </Switch>
    )
}
