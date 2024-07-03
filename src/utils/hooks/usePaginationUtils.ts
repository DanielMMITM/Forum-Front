import { ChangeEvent, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { scrollToTop } from '../helpers/scrollToTop';

export const usePaginationUtils = () => {
  const [params, setParams] = useSearchParams();
  const currentPage = params.get('page');
  console.log(currentPage);

  function handleChange(_event: ChangeEvent<unknown>, pageSelected: number) {
    params.set('page', pageSelected.toString());
    setParams(params);
  }

  useEffect(() => {
    setParams(params);
  }, []);

  scrollToTop();

  return { currentPage, handleChange };
};
