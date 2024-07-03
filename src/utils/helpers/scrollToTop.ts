import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export function scrollToTop() {
  const [_params, setParams] = useSearchParams();
  useMemo(() => {
    window.scrollTo({ top: 0 });
  }, [setParams, []]);
}
