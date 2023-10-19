import styles from "./styles.module.scss";
import {MdSecurity} from "react-icons/md";
import {BsSuitHeart} from "react-icons/bs";
import {RiAccountPinCircleLine, RiArrowDownFill} from "react-icons/ri";
 
export default function Top() { 
    return(
        <div className={styles.top}>
            <div className={styles.top__container}>
                <div></div>
                <ul className={styles.top__list}>
                    <li>
                        <img 
                          src="https://icons.iconarchive.com/icons/wikipedia/flags/256/NP-Nepal-Flag-icon.png"
                          alt=" "
                        />
                        <span>Nepal / NPR</span>
                    </li>
                    <li>
                        <MdSecurity/>
                        <span>Buyer Protection</span>
                    </li>
                    <li>
                        <span>Customer Service</span>
                    </li>
                    <li>
                        <span>Help</span>
                    </li>
                    <li>
                        <BsSuitHeart/>
                        <Link href="/profile/whishlist">
                        <span>Whishlist</span>
                        </Link>
                    </li>
                    <li>
                        <div className={styles.flex}>
                            <RiAccountPinCircleLine/>
                            <span>Account</span>
                            <RiArrowDownFill/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}