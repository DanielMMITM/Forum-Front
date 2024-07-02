import { ChangeEvent, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const usePaginationUtils = () => {
  const [params, setParams] = useSearchParams();
  const currentPage = params.get('page');
  if (!currentPage) params.set('page', '1');

  function handleChange(event: ChangeEvent<unknown>, pageSelected: number) {
    params.set('page', pageSelected.toString());
    setParams(params);
  }

  useEffect(() => {
    setParams(params);
  }, []);

  return { currentPage, handleChange };
};
