
const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-slate-200 text-base-content">
                <div>
                    <p className="text-green-700 text-5xl font-serif font-bold uppercase">Ema Graphy</p>
                </div>
                <div className="text-slate-800">
                    <span className="footer-title">Address</span>
                    <a className="link link-hover">Dhaka, Bangladesh</a>
                </div>
                <div className="text-slate-800">
                    <span className="footer-title">Contact</span>
                    <a className="link link-hover">+0195343443343</a>
                    <a className="link link-hover">emagraphy@gmail.com</a>
                </div>
                <div className="text-slate-800">
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms and conditions</a>
                    <a className="link link-hover">Privacy policy</a>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-gradient-to-r from-green-200 to-blue-300 text-base-content">
                <div>
                    <p className="text-slate-900">Copyright © 2023 - All right reserved by Emagraphy</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;