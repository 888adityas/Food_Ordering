import ZomatoLogo from '../../assets/Zomato.png';
import classes from './NavbarBrand.module.css';


const NavbarBrand = () => {
    return (<>
        <div className={`${classes.navbarBrandBg} `}>
            <div className="container d-flex flex-column flex-sm-row justify-content-between align-items-center p-2 px-4 ">
                <div className="navbar-brand">
                    <img className='img-fluid' src={ZomatoLogo} alt="" width="200" height="100" />
                </div>
                <div>
                    <p className='fs-5 mb-0 text-dark'>📞Mob: +919876541230 </p>
                </div>
            </div>
        </div>
    </>);
}

export default NavbarBrand;