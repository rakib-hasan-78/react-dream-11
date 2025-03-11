import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { emailValidator } from '../validator/validator';

const EmailSub = ({ parentStyle, inputStyle, btnStyle }) => {

    const [email, setEmail] = useState('');

    const emailHandler = (e) => {
        e.preventDefault();
        const errorMSG = emailValidator(email);
        if (errorMSG) {
            toast.error(`${errorMSG}`, {
                position: 'top-center',
                autoClose: '3000',
            });
        } else {
            toast.success('✅ Subscribed successfully!', {
                position: 'top-center',
                autoClose: '3000',
            });
            setEmail('')
        }
    };

    return (
        <div className={`flex 3xs:flex-col lg:flex-row w-full ${parentStyle}`}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter your email"
                className={`outline-none placeholder:capitalize placeholder:text-sm ${inputStyle}`}
            />
            <button
                onClick={emailHandler}
                className={`${btnStyle} font-semibold text-black bg-gradient-to-r from-pink-400 via-yellow-300 to-yellow-500 capitalize`}
                type="button"
            >
                subscribe
            </button>
        </div>
    );
};

EmailSub.propTypes = {
    parentStyle: PropTypes.string.isRequired,
    inputStyle: PropTypes.string.isRequired,
    btnStyle: PropTypes.string.isRequired,
};

export default EmailSub;
