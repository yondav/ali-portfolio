import { Redirect, Route } from 'react-router-dom';

const AdminRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem('authToken') ? (
          <Component {...props} />
        ) : (
          <Redirect to='/admin/login' />
        )
      }
    />
  );
};

export default AdminRoute;
