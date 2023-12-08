import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoutes({ children }) {

    const navigate = useNavigate();
    const token = localStorage.getItem('jwtToken');

    useEffect(()=> {
        if(!token) navigate('/login');
    }, [token]);
    return children;
}

export default ProtectedRoutes;
