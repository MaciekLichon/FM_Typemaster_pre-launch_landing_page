import logo from '../../assets/shared/logo.svg';
const Header = () => {
    return (
        <header className="
            flex-between mt-6
            md:mt-10
            lg:mt-14"
        >
            <img src={logo} alt="logo"/>
            <button className="btn btn-gray">Pre-order now</button>
        </header>
    );
};

export default Header;
