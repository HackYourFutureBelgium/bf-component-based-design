import { useErrorsContext } from '../../contexts';

export const Errors = () => {
  const { error } = useErrorsContext();

  return <div className='errors-container'>{error}</div>;
};
