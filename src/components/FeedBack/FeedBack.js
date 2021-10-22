import React from 'react';
import Contact from '../Contact/Contact';

const FeedBack = () => {
    return (
        <div>
            
<div className="container fw-bold">
    <h1 className="text-secondary fw-bold">Your Feedback</h1>
    <p>
    UCLA Health is committed to maintaining the highest standards in satisfaction. As your partner in healthcare, we encourage anyone to submit comments and suggestions about how we might improve your experience with UCLA Health. Please use this form to send us your feedback, or visit our contact us page for a list of phone numbers if you would like to speak directly with someone.
<br />
Please note that we are unable to respond to medical questions through this form. 
    </p>

<div className="mb-3">
    <label htmlFor="">Your Name:</label> <br />
    <input type="Text" name="" id="" placeholder="Name" />
    <br /> <br />

<label htmlFor="">Your Email:</label> <br />
    <input type="Email" name="" id="" placeholder="Email"/>
    <br /> <br />
<label htmlFor="">Your Feedback: </label>
<br />
    <textarea name="textarea" id="" cols="30" rows="5" placeholder="Your Feedback"></textarea>
    <br />
    <br />
    <button class="btn btn-primary"type="submit">Submit</button>
</div>

</div>
<Contact></Contact>
        </div>
    );
};

export default FeedBack;