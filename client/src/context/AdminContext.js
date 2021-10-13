import React, { createContext, useReducer } from 'react';

export const AdminContext = createContext();

const adminState = {
  admin: false,
};

const adminReducer = (state, action) => {
  switch (action.type) {
    case 'ADMIN':
      return { admin: true };
    case 'NOTADMIN':
      return { admin: false };
    default:
      return state;
  }
};

export function AdminProvider(props) {
  const [state, dispatch] = useReducer(adminReducer, adminState);

  return (
    <AdminContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AdminContext.Provider>
  );
}
