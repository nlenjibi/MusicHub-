import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
const usePageTitle = () => {
    const location = useLocation();
    const baseTitle= "MovieHub | ";

    useEffect(() => {
    const path = location.pathname;
   
    switch (path) {
        case '/dashboard':
            document.title = baseTitle + 'Dashboard ';
            break;
        case '/profile':
            document.title = baseTitle + 'Profile ';
            break;
        case '/login':
            document.title = baseTitle + 'Login';
            break;
        default:
            document.title = baseTitle + 'Home';
            break;
    }
}, [location]);
};
export default usePageTitle;
