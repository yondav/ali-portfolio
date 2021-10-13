import { useContext, useState } from 'react';
import axios from 'axios';
import { AdminContext } from '../context/AdminContext';

export default function useAdminContext() {
  const admin = useContext(AdminContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getAdmin = async () => {
    try {
      const res = await axios.get('/api/users');

      return { res };
    } catch (err) {
      console.error(err);
    }
  };

  const login = async (email, password) => {
    try {
      const { data } = await axios.post(
        '/admin/login',
        {
          email: email,
          password: password,
        },
        {
          header: { 'Content-Type': 'application/json' },
        }
      );

      let { res } = await getAdmin();

      if (data._id === res.data[0]._id) {
        localStorage.setItem('authToken', data.token);
        setIsLoggedIn(true);
      }

      admin.dispatch({ type: 'ISADMIN' });
      console.log(admin);
    } catch (err) {
      console.error(err);
    }
  };

  return { login, isLoggedIn };
}
