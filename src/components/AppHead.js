
import AuthNav from './AuthNav';
import UserMenu from './UserMenu/UserMenu';
import Navigation from './Navigation';
import { getIsLoggedIn } from '../redux/auth/authSelector';
import { useSelector } from 'react-redux';

const AppHead = ()=>
{
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (<>
        {/* <a>Home</a>
        <a>Contacts</a>
        <a>Registration</a>
        <a>LogIn</a>
        <a>LogOut</a> */}
        <header>
            <Navigation></Navigation>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
                {/* <UserMenu></UserMenu>
                <AuthNav></AuthNav> */}
            
        </header>
    </>
    )
}
export default AppHead;