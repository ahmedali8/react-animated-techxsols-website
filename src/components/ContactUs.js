import React, { useState } from 'react';
import useWebAnimations, { fadeIn } from "@wellyshen/use-web-animations";


const ContactUs = () => {

    const { ref } = useWebAnimations({ ...fadeIn });

    const initialState = {
        name: '',
        email: '',
        message: ''
    };

    const [data, setData] = useState(initialState);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        alert(`
            Name: ${data.name}
            Email: ${data.email}
            Messaage: ${data.message}
        `);

        setData(initialState);
    }

    return (
        <div className="contactUs" ref={ref}>
            <h1 className="text-center my-5">Contact Us</h1>
            <div className="container container_div my-5">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={onSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name">Name</label>
                                <input required type="text" className="form-control" name="name" value={data.name} onChange={handleChange} id="name" placeholder="Enter name here..." />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email">Email address</label>
                                <input required type="email" className="form-control" name="email" value={data.email} onChange={handleChange} id="email" placeholder="Enter email here..." />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message">Your Message</label>
                                <textarea required className="form-control" name="message" value={data.message} onChange={handleChange} id="message" rows="3"></textarea>
                            </div>
                            <div className="mb-3">
                                <button className="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
