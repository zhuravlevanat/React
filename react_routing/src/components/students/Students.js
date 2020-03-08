import React from 'react';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import StudentsList from './StudentsList';
import StudentsForm from './StudentsForm';

function Student() {
  const { path, url } = useRouteMatch();

  return (
      <div>
        <h2>List of students</h2>
        <Link to={`${url}/new`}><button>Add Student</button></Link>
        <Switch>
          <Route exact path={`${path}/`}>
            <StudentsList />
          </Route>
          <Route
              path={`${path}/:id`}
              render={route => {
                return <StudentsForm id={route.match.params.id} />;
              }}>
          </Route>
        </Switch>
      </div>
  );
}

export default Student;