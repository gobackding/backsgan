import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom"


export default (routes) => {
    const RouterEach = (params) => {
        return <Route
            path={params.path}
            component={params.component}
            key={params.key} render={() => {
                // eslint-disable-next-line no-unused-expressions
                <Fragment>
                    <Route component={params.component} />
                    <Redirect to={params.childern[0].path} />
                    <Switch>
                        {
                            params.childern.map(child => {
                                if (child.childern) {
                                    return RouterEach(child)
                                } else {
                                    return <Route component={child.component} path={child.path} key={child.key} />
                                }
                            })
                        }
                    </Switch>
                </Fragment>
            }} />
    }


    return routes.map(item => {
        if (item.childern) {
            return RouterEach(item)
        } else {
            return <Route path={item.path} component={item.component} key={item.key} />
        }
    })
}