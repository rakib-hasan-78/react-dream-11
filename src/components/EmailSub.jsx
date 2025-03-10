import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';

const EmailSub = ({ parentStyle, inputStyle, btnStyle }) => {
    const [email, setEmail] = useState('');

    const emailValidator = (email) => {
        const emailLowerCase = email.toLowerCase();
        const allDomains = ['gmail', 'yahoo', 'icloud', 'outlook', 'hotmail'];

        // Split the email into local part and domain
        const [localPart, fullDomain] = email.split('@');

        // Check if email is empty
        if (!email.trim()) return 'Email cannot be empty or just spaces.';

        // Check if there is uppercase in the email
        if (email !== emailLowerCase) return 'Email should not contain uppercase letters.';

        // Check if @ is missing
        if (!localPart || !fullDomain) return `Invalid formate of '@' or @ missing !`;

        // Get the domain part before the dot
        const domain = fullDomain.split('.')[0];

        // Check if domain is in the allowed list
        if (!allDomains.includes(domain)) {
            console.log('Invalid domain:', domain);  // Debugging log
            return 'Only Gmail, iCloud, Yahoo, Hotmail, or Outlook are accepted.';
        }

        if (/[^a-zA-Z0-9._-]/.test(localPart)) return 'Email can only contain letters, numbers, ".", "-", and "_".';
        
        if(email.endsWith('.'))return '. cannot be at the last';
        // Check if local part length is sufficient
        if (localPart.length < 3) return 'Username has to be at least 3 characters before @';

        // Only allow letters to start the local part (no numbers or symbols)
        if (/^[^a-zA-Z]/.test(localPart)) return 'Email cannot start with a number or any symbol.';


        return null;
    };

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
