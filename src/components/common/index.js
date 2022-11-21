import { useEffect, useRef } from 'react';

export const usePrevious = (count) => {
  const prevCount = useRef();
  useEffect(() => {
    prevCount.current = count;
  }, [count]);
  return prevCount.current;
};
