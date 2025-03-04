import React from "react";
import { Link } from "react-router-dom";
import { RiWhatsappFill } from 'react-icons/ri';
import { IoIosCall } from "react-icons/io";

function Footer() {
    const Logo = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400">
        {/* <!-- Main Company Name - Centered --> */}
        <text x="400" y="160"
            font-family="Arial"
            font-size="135"
            font-weight="900"
            fill="#b7410e"
            text-anchor="middle"
            direction="rtl">شركة السهيل</text>

        {/* <!-- Services Text - Centered --> */}
        <text x="400" y="260"
            font-family="Arial"
            font-size="70"
            font-weight="900"
            fill="#000000"
            text-anchor="middle"
            direction="rtl">للمقاولات و اعمال الصيانة</text>
    </svg>

    return (<>
        <div className="container" dir="rtl">
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top text-end">
                <div className="col mb-3">
                    <Link to="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                        {Logo}
                    </Link>
                    <p className="text-body-secondary">© {new Date().getFullYear()}</p>
                </div>

                <div className="col mb-3">
                </div>

                <div className="col mb-3">
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <a href="https://wa.me/966506790641" className="nav-link p-0 text-body-secondary">
                                <RiWhatsappFill color="#25D366" size={40} />
                                <span className="text-green-600 font-bold">0506790641</span>
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a href="https://wa.me/201099918114" className="nav-link p-0 text-body-secondary">
                                <RiWhatsappFill color="#25D366" size={40} />
                                <span className="text-green-600 font-bold">01099918114</span>
                            </a>

                        </li>
                        <li className="nav-item mb-2">
                            <a href="tel:+966506790641" className="nav-link p-0 text-body-secondary">
                                <IoIosCall color="black" size={24} />
                                <span className="text-green-600 font-bold">0506790641</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>صفحات سريعة</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-body-secondary">الرئيسية</Link></li>
                        <li className="nav-item mb-2"><Link to="/Mentinance" className="nav-link p-0 text-body-secondary">خدمات الصيانة</Link></li>
                        <li className="nav-item mb-2"><Link to="/Cleaning" className="nav-link p-0 text-body-secondary">خدمات التنظيف</Link></li>
                        <li className="nav-item mb-2"><Link to="/Contractors" className="nav-link p-0 text-body-secondary">خدمات المقاولات</Link></li>
                    </ul>
                </div>
            </footer>
        </div>
    </>);
}

export default Footer;
