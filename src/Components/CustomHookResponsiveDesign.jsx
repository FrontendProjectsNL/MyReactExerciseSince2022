import { useState, useEffect } from 'react';

const useMedia = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const updateMatches = () => setMatches(mediaQuery.matches);

    mediaQuery.addListener(updateMatches);
    updateMatches();

    return () => mediaQuery.removeListener(updateMatches);
  }, [query]);

  return matches;
};

// Usage
const CustomHookResponsiveDesign = () => {
  const isWideScreen = useMedia('(min-width: 1024px)');

  return <p>{isWideScreen ? 'Wide Screen' : 'Small Screen'}</p>;
};

export default CustomHookResponsiveDesign;
