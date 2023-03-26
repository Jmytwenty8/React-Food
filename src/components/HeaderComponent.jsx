/* eslint-disable react/react-in-jsx-scope */
import { Link } from "react-router-dom";
const Title = () => (
    <Link to={'/'}>
        <img
            className="h-32 p-2 mx-20"
            alt="logo"
            src="https://img.freepik.com/premium-vector/fast-food-logo-designs-template-food-delivery-logo-symbol_7649-3997.jpg?w=740"
        />
    </Link>
);


const HeaderComponent = () => (
    <div className="flex justify-between bg-pink-50 ">
        <Title /> 
        <div>
            <ul className="flex px-8 py-8">

                <li className="bg-gray-700 text-white py-2 px-4 m-2 rounded-md hover:bg-blue-500">
                    <Link to={'/'}>
                        Home
                    </Link>
                </li>

                <li className="bg-gray-700 text-white py-2 px-4 m-2 rounded-md hover:bg-blue-500">
                    <Link to={'/about'}>
                        About US
                    </Link>
                </li>

                <li className="bg-gray-700 text-white py-2 px-4 m-2 rounded-md hover:bg-blue-500">
                    <Link to={'/contact'}>
                        Contact
                    </Link>
                </li>
                <li className="bg-gray-700 text-white py-2 px-4 m-2 rounded-md hover:bg-blue-500">Cart</li>
            </ul>
        </div>
    </div> 
);

export default HeaderComponent;