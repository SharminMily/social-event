import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div>
            <footer className="w-full bg-blue-950 text-white p-8">
                <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-black text-white text-center md:justify-around p-20">
                    <img src={logo} alt="logo-ct" className="w-32 bg-white" />
                    <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                        <li>
                            <a
                                href="#"
                                className="block  text-start font-sans text-base font-bold leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-blue-900 focus:text-blue-800"
                            >
                                <p className='border-b-2 mb-2'>SERVICES</p>
                                <div className='text-gray-400 text-start no-underline font-normal'>
                                    <li>Branding</li>
                                    <li>Design</li>
                                    <li>Marketing</li>
                                    <li>Advertisement</li>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block font-sans text-base font-bold text-start leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-blue-900 focus:text-blue-800"
                            >
                              <p className='border-b-2 mb-2'>COMPANY</p>
                               <div className='text-gray-400 text-start font-normal'>
                                    <li>About us</li>
                                    <li>Contact</li>
                                    <li>Jobs</li>
                                    <li>Press kit</li>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block font-sans text-base font-bold  leading-relaxed text-blue-gray-900 antialiased text-start transition-colors  hover:text-blue-900 focus:text-blue-800"
                            >
                                <p className='border-b-2 mb-2'> EXPLORE</p>
                                <div className='text-gray-400 text-start font-normal'>
                                    <li>Features</li>
                                    <li>Enterprise</li>
                                    <li>Security</li>
                                    <li>Pricing</li>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block font-sans text-base font-bold text-start leading-relaxed text-blue-gray-900 antialiased transition-colors  hover:text-blue-900 focus:text-blue-800"
                            >
                                <p className='border-b-2 mb-2'>LEGAL</p>
                                <div className='text-gray-400 text-start font-normal'>
                                    <li>Terms of use</li>
                                    <li>Privacy policy</li>
                                    <li>Cookie policy</li>
                                    <li>User policy</li>
                                   
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block font-sans text-base font-bold text-start leading-relaxed text-blue-gray-900 antialiased transition-colors  hover:text-blue-900 focus:text-blue-800"
                            >
                                <p className='border-b-2 mb-2'>SOCIAL</p>
                                <div className='text-gray-400 text-start font-normal'>
                                    <li>Twitter</li>
                                    <li>Instagram</li>
                                    <li>Facebook</li>
                                    <li>Github</li>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-8 border-blue-gray-50" />
                <p className="block text-center font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                    © 2023 Resolved Social Event
                </p>
            </footer>
        </div>
    );
};

export default Footer;