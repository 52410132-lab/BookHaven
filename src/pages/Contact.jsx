import { useState } from "react";

function Contact() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [success, setSuccess] = useState(false);

function handleSubmit(e) {
e.preventDefault();

setSuccess(true);
setName("");
setEmail("");
setMessage("");
}

return (
<div className="page">
<h1>Contact Us 📩</h1>

<p>
Have any questions? Feel free to contact us!
</p>

<form
className="contact-form"
onSubmit={handleSubmit}
>
<label>Full Name</label>
<input
type="text"
placeholder="Enter your name"
value={name}
onChange={(e) => setName(e.target.value)}
required
/>

<label>Email</label>
<input
type="email"
placeholder="Enter your email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
/>

<label>Message</label>
<textarea
placeholder="Write your message"
value={message}
onChange={(e) => setMessage(e.target.value)}
required
/>

<button className="btn" type="submit">
Send Message
</button>

{success && (
<p className="success">
Message submitted successfully! (Demo)
</p>
)}
</form>
</div>
);
}

export default Contact;

