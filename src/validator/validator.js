const emailValidator = (email)=>{

    const emailLowercase = email.toLowerCase();

    const allDomains = ['gmail', 'yahoo','icloud','outlook','hotmail'];

    // splitting email with userName & domain with @ ===>
    const [userName , domains] = email.split('@');

    // check if the email is empty spaces ===>
    if(!email.trim()) return `Email cannot be empty or just spaces.`;
    // check if the email is  uppercase ===>
    if(email !== emailLowercase) return `Email should not contain uppercase letters.`;
    // check if @ is missing ===>
    if(!userName || !domains) return `Inappropriate Email format`;
    // check if targeted domains are missing ===>
    const domain = domains.split('.')[0];

    if(!allDomains.includes(domain)) return `Only Gmail, iCloud, Yahoo, Hotmail, or Outlook are accepted.`;
    // check if userName length is at least 3 characters ===>
    if(userName.length<3) return `Username has to be at least 3 characters before @.`;
    // check if '.' is at the end ===>
    if(email.endsWith('.')) return `' . ' cannot be at the end.`
    // check if only valid symbol - _ . is in the mail ===>
    if(/[^a-zA-Z0-9._-]/.test(userName)) return `Email can only contain letters, numbers, and  ' .   -  _ '`;
    // check if email starts with numbers or symbols ===>
    if(/^[^a-zA-Z]/.test(userName)) return `mail cannot start with a number or any symbol.`;

    return null;
    
}

export {emailValidator};