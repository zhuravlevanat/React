import React from 'react';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import GroupsList from './GroupsList';
import GroupsForm from './GroupForm';

function Groups() {
    const { path, url } = useRouteMatch();

    return (
        <div>
            <h2>Groups Module</h2>
            <Link to={`${url}/new`}><button>Add Group</button></Link>
            <Switch>
                <Route exact path={`${path}/`}>
                    <GroupsList />
                </Route>
                <Route
                    path={`${path}/:id`}
                    render={route => {
                        return <GroupsForm id={route.match.params.id} />;
                    }}>
                </Route>
            </Switch>
        </div>
    );
}

export default Groups;