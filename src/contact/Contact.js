import './Contact.css';


function Contact() {

  return (
    <div className="contact">
      <header className="contact_header">
        <div className="box_title">
          <h1>Contact Us</h1>
          <a>Have any question? We'd love to hear from you.</a>
        </div>
        <div className="box_text">
          <div className="box_1">
            <h1>Customer Service</h1>
            <a>If you have some urgent problems. Please Call 541-123-8888</a>
          </div>
          <div className="box_2">
            <h1>Help & Support</h1>
            <a>Our technical support team is available 24 hours a day.</a>
            <button>Submit a request</button>
          </div>
          <div className="box_3">
            <h1>Online</h1>
            <a>We also provide online customer services to you.</a>
            <button>Contact</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Contact;
