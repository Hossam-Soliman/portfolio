import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./contact.css";
import MapCode from "./MapCode.json";

const Contact = ({ google }) => {
  useEffect(() => {
    document.getElementById("newSpan").innerHTML = document
      .getElementById("newSpan")
      .textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  });

  //   const handleName = (e) =>{
  //     localStorage.setItem ('name', e.target.value)
  //   }

  const sendEmail = (e) => {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 2000);
    return () => clearTimeout(timer);
  };

  return (
    <div className="contact">
      <div className="row">
        <div className="contact-form col-md-3">
          <h1 id="newSpan">Contact me</h1>
          <p>
            Have a question or want to work together? don’t hesitate to contact
            me using below form.
          </p>
          <form
            id="gform"
            method="POST"
            action="https://script.google.com/macros/s/AKfycbyc0trOSRTPZykGyUg0lXrXxdWjWNwuc-DQZZcp/exec"
          >
            <input
              autoComplete="off"
              className="name"
              name="name"
              type="text"
              placeholder="Name"
              required
            ></input>
            <input
              autoComplete="off"
              className="email"
              name="email"
              type="email"
              placeholder="Email"
              required
            ></input>
            <input
              autoComplete="off"
              className="subject"
              type="text"
              placeholder="Subject"
            ></input>
            <textarea
              className="textarea"
              name="message"
              type="text"
              placeholder="Message"
            ></textarea>
            <button onClick={sendEmail}>SEND</button>
          </form>
        </div>

        <div className="Map col-md-6">
          <Map
            google={google}
            zoom={5}
            style={{ width: "740px", height: "680px" }}
            initialCenter={{ lat: 29.142529, lng: 48.115176 }}
            streetViewControl={false}
            disableDefaultUI={true}
            styles={MapCode}
          >
            <div className="card">
              <p>Hossam Soliman, </p>
              <p>Kuwait city</p>
              <p>(+965) 970 28660</p>
              <p>
                <span style={{ color: "#08fdd8" }}>@</span>:
                hsoliman075@gmail.com
              </p>
            </div>

            <Marker position={{ lat: 29.142529, lng: 48.115176 }} />
          </Map>
        </div>
      </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: ":P",
})(Contact);
