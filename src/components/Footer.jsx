// import React from 'react';
import PropTypes from 'prop-types';
import footerIMG from '../assets/logo-footer.png';
import EmailSub from './EmailSub';
const Footer = () => {
    
    return (
        <div className='bg-gray-950 w-full min-h-auto pt-64 pb-5'>
            <main>
                <div className='w-10/12 h-auto py-5 flex items-center justify-center'>
                    <div>
                        <img src={footerIMG} alt="footer-logo" />
                    </div>
                </div>
                <div className='w-10/12 h-auto py-5 flex flex-wrap 3xs: flex-col md:flex-row items-center justify-between'>
                    <div className='flex flex-col items-start justify-start lg:w-2/6 h-48'>
                        <h5 className='footer-title'>about us</h5>
                        <p className='footer-PG'>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div className='flex flex-col items-start justify-start 3xs:w-full lg:w-3/12 h-48'>
                        <h5 className='footer-title'>quick links</h5>
                        <ul className='list-disc text-white/35 mt-5 font-self'>
                            <li className='pb-2 3xs:ml-6 lg:ml-0'>home</li>
                            <li className='pb-2 3xs:ml-6 lg:ml-0'>services</li>
                            <li className='pb-2 3xs:ml-6 lg:ml-0'>about</li>
                            <li className='pb-2 3xs:ml-6 lg:ml-0'>contact</li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-start justify-start 3xs:w-full lg:w-5/12 h-48'>
                        <h5 className='footer-title'>subscribe</h5>
                        <p className='footer-PG'>Subscribe to our newsletter for the latest updates.</p>
                        <div className='w-full mt-2 py-3'>
                            <EmailSub
                            parentStyle={`items-start justify-start rounded-lg 3xs:space-y-2 lg:space-y-0`}
                            inputStyle={` 3xs:w-full lg:7/12 px-2 py-2.5  rounded-lg lg:rounded-none lg:rounded-l-lg placeholder:font-light`}
                            btnStyle={`3xs:w-full lg:w-5/12 rounded-lg lg:rounded-none lg:rounded-r-lg py-3.5 text-xs placeholder:font-light`}
                            />
                        </div>
                    </div>
                </div>
            </main>
            <div className='w-full border-b border-slate-100/25 mb-11'></div>
            <div className='w-full h-auto pb-2 pt-0.5 flex items-center justify-center'>
                <span  className='text-white/35'> &copy; {} HSB Inc. All Rights Reserved.</span>
            </div>
        </div>
    );
};

Footer.propTypes = {
    
};

export default Footer;