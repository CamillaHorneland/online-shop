import styles from "./Nav.module.css";
import logo from "../../../assets/Logo.png";

const Logo = ({ big = true }) => {

    const handleLogoClick = () => {
        window.location.href = "/";
    };

    return (
        <div className={styles.logo} onClick={handleLogoClick}>
            <img className={ !big ? "tiny" : "" } src={logo} alt="Logo" />
        </div>
    )
};

export default Logo;