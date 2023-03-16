/* eslint-disable react/react-in-jsx-scope */
import { Link } from "react-router-dom";
const Title = () => (
    <Link to={'/'}>
        <img
            className="logo"
            alt="logo"
            src="https://img.freepik.com/premium-vector/fast-food-logo-designs-template-food-delivery-logo-symbol_7649-3997.jpg?w=740"
        />
    </Link>
);


const HeaderComponent = () => (
    <div className="header">
        <Title />
        <div className="nav-items">
            <ul>

                <li>
                    <Link to={'/'}>
                        Home
                    </Link>
                </li>

                <li>
                    <Link to={'/about'}>
                        About US
                    </Link>
                </li>

                <li>
                    <Link to={'/contact'}>
                        Contact
                    </Link>
                </li>
                <li>Cart</li>
            </ul>
        </div>
    </div> 
);

export default HeaderComponent;