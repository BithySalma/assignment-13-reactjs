
import ContactFour from '../components/contact/ContactFour';
import ContactThree from '../components/contact/ContactThree';
import ContactTwo from '../components/contact/ContactTwo';
import ContactOne from './../components/contact/ContactOne';
const Contact = () => {
    return (
        <div className='d-flex justify-content-center'>
            <h1>Contact Page</h1>
            <ContactOne/>
            <ContactTwo/>
            <ContactThree/>
            <ContactFour/>
        </div>
    );
};

export default Contact;