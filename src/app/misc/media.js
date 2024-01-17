import { useMediaQuery } from 'react-responsive'

const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

export {
  isTablet,
  isMobile,
};
