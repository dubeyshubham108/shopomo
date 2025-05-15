import React from "react";
import logo from "../assets/shopomo_logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            <div>
                <Link to={'/'}><img src={logo}
                 className="mb-5 w-32 cursor-pointer"
                alt="Logo of Shopomo"
                 />
                </Link>
                <p className="w-full md:w-2/3 text-gray-600">
                    Elevating everyday style with timeless luxury.<br/>
                    123 Park Avenue, Suite 500, New York, NY 10022
                </p>
            </div>
            <div>
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className="text-xl mb-5 font-medium">GET IN TOUCH</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>+1-222-333-4567</li>
                    <li>contact@shopomo.com</li>
                </ul>
            </div>
            </div>
            <div>
                <hr />
                <p className="py-5 text-sm text-center">Copyright 2025@ shopomo.com - All Right Reserved.</p>
            </div>
        </div>

    )
};

export default Footer;