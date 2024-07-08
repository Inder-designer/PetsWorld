import { Link, Navigate, useNavigate } from "react-router-dom";

export const SessionExpire = () => {
    const currentDate = new Date();
    // console.log(currentDate);
    const sessionObject = JSON.parse(sessionStorage.getItem('orderDetails'));

    if (sessionObject && sessionObject.expiresAt) {
        const expDate = new Date(sessionObject.expiresAt);

        if (currentDate < expDate) {
            // console.log('session active');
            return false;
        } else {
            // Session expired logic
            sessionStorage.removeItem('orderDetails');
            // console.log('session expired');
            const confirmation = window.confirm(
                'Your session has expired. Do you want to continue?'
            );
            if (confirmation) {
            }
             return true;
        }   
    } else {
        console.log('no session found or invalid session object');
        // Handle cases where sessionObject is not found or invalid
        return true;
    }
};
