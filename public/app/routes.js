import React from 'react'
import { Route, Switch } from 'react-router'

import { App, NotFoundPage } from './components'
import { PeoplePage, HomeworldPage } from '../people'

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => {
    const SubRoute = subRouteFactory(route.component)

    // pass the sub-routes down to keep nesting
    return <SubRoute {...props} routes={route.routes} />
  }}/>
)

const subRouteFactory = (Component) => {
  return class SubRoute extends React.Component {
    render () {
      const { routes = [], ...props } = this.props;

      return (
        <div>
          <Component {...props} />

          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </div>
      )
    }
  }
}

const routes = [
  { path: '/',
    exact: true,
    component: App
  },
  { path: '/people',
    component: PeoplePage,
    routes: [
      { path: '/people/:id/homeworld', // separate page for links
        component: HomeworldPage
      }
    ]
  },
  {
    component: NotFoundPage
  }
]

export default (
  <Switch>
    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
  </Switch>
)

export { RouteWithSubRoutes }
