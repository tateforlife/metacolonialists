import { useMediaQuery } from 'react-responsive'

const useMediaHook = () => {
  const isAvgDesktop = useMediaQuery({ query: '(max-width: 1260px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return {
    isAvgDesktop,
    isTablet,
    isMobile,
  }
};

export default useMediaHook;
