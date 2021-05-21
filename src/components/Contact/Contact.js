import './Contact.css';
var fs = require('fs');


function Contact() {
  console.log("in contact");

  const generateFile = () => {
    var start = 0;
    var arr = [];

    for (let i = start; i < (start+4); i++) {
      var obj = {
        id: i,
        name: "car" + i,
        type: "car",
        weight: "0",
        maxSp: "0",
        accel: "2",
        year: "2021"
      }
      arr.push(obj);
    }

    var jsonObj = JSON.stringify(arr);
    console.log(jsonObj);
    // fs.writeFile("upload.json", jsonObj);
  }
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
            <button onClick={generateFile}>Contact</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Contact;
