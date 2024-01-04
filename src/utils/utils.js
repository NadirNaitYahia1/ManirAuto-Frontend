import { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'





const PrivateRoutes = () => {
    let auth = {'token': false}

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            auth.token = true
            console.log('nadir je suis true le token existe')
        }
    }, [])

    

    return(
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    )
}

const Redirect = () => {
    return <Navigate to="/login"/>
}


export default PrivateRoutes
export { Redirect }