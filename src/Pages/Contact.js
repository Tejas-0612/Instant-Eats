import CONTACT_IMG from "../images/ContactUs.jpg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-img">
        <img src={CONTACT_IMG} />
      </div>
      <form className="contact-form">
        <h1>Contact Us </h1>

        <input
          type="text"
          placeholder="Name"
          className="form-input"
          autoFocus
        />
        <input type="email" placeholder="Email" className="form-input" />
        <input type="text" placeholder="password" className="form-input" />
        <textarea type="text" placeholder="Subject" className="form-input" />
        <input type="File" className="p-2 m-2" />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default Contact;
