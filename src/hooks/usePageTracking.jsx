import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
/**
 * Custom hook to track page views using Google Analytics.
 */
const usePageTracking = () => {
  const location = useLocation();

    useEffect(() => {
        if (typeof window.gtag === "function") {
            window.gtag("event", "page_view", {
                page_path: location.pathname + location.search,
                page_title: document.title,
            });
        }
    }, [location]);
    };

export default usePageTracking;