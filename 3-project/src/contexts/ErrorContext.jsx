import { createContext, useState, useContext } from 'react';

export const ErrorContext = createContext(null);

export const ErrorContextProvider = ({ children }) => {
  const [error, setError] = useState('');

  return (
    <ErrorContext.Provider
      value={{
        setError,
        error,
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};

export const useErrorsContext = () => {
  const ctx = useContext(ErrorContext);

  return ctx;
};
