import { useMemo } from 'react';

export function scrollToTop() {
  useMemo(() => {
    window.scrollTo({ top: 0 });
  }, []);
}
