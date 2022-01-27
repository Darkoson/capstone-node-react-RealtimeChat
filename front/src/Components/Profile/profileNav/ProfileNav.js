import React from 'react';
import { useSelector } from 'react-redux';
export default function ProfileNav() {
    // const [userData, setUserData] = useState(props.userData)
    const profileData = useSelector(state => state.profileData)
    return (
        <div className="profileNav-Body center-content">
            <div className="profileNav-Body-left"> 
                <h3 style={{fontFamily:'Palette Mosaic, cursive'}}>Linkers</h3>
                <div className="divider"></div>
                <p style={{fontFamily:' Poppins, sans-serif'}}>{profileData.lname}  {profileData.fname}</p> 
            </div>
            <div className="profileNav-Body-right">
               
            </div>
        </div>
    )
}
