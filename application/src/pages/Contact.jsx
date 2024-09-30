import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi"; 

import Button from "../components/Button";

import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { contact } from "../service/API";

const Contact = () => {
  const queryClient = useQueryClient()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });

    // Send the form data to the server
    mutateContact();
  };

  const { mutate } = useMutation({
    mutationFn: contact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contact'] })
      alert('Message Sent Successfully. Thank You for Contacting Us!👍')
      openMailTo();
    },
  })

  const mutateContact = () => {
    const payload = {
      data: {
        FirstName: formData.firstName,
        LastName: formData.lastName,
        Email: formData.email,
        Phone: formData.phone,
        Message: formData.message,
      },
    };
    mutate(payload);
  };

  const openMailTo = () => {
    const { email, firstName, lastName, phone, message } = formData;
    const subject = "Contact Form Submission";
    const body = `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoUrl);
  };

  return (
    <>
      <section className="section__hero-contact bg-white h-[15rem]" id="contact">
      </section>
      <section className="section__contact bg-[#E7F3ED] section-padding">
        <div className="sanef-wrap">
          <h1 className="text-[4rem] mb-32 font-semibold">Contact Us</h1>
          <div className="flex gap-20 flexCol">
            {/* Contact Information */}
            <div className="contact-image flex-1 bg-primary rounded-[3rem] p-20 flex items-end bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `linear-gradient(to bottom, #313136d2, #313136ca), url(${'https://res.cloudinary.com/dgvqjuxpg/image/upload/v1716331378/Website%20Assets/hocxd17ycuksiijfprp1.jpg'})` }}
            >
              <div className="w-50%">
                <div className="flex gap-10 mb-10">
                  <span className='bg-[#00A650] p-3 rounded-full'>
                    <FaLinkedinIn size={27} color="white" />
                  </span>
                  <span className='bg-[#00A650] p-3 rounded-full'>
                    <FaInstagram size={27} color="white" />
                  </span>
                  <span className='bg-[#00A650] p-3 rounded-full'>
                    <FaXTwitter size={27} color="white" />
                  </span>
                  <span className='bg-[#00A650] p-3 rounded-full'>
                    <FaFacebookF size={27} color="white" />
                  </span>
                  <span className='bg-[#00A650] p-3 rounded-full'>
                    <TfiYoutube size={27} color="white" />
                  </span>
                </div>
                <p className="text-x text-[#ffffffd6] mb-3">NCWS House, <br /> 2nd Floor, Plot 14B Ahmed Onibudo Street <br />Victoria Island, Lagos.</p>
                <i className="text-x text-[#ffffffcf] mb-3">info@sanefcreativesltd.com</i>
                <h3 className="text-x text-[#fff]">+234 909 555 7912</h3>
              </div>
            </div>
            {/* Contact Form */}
            <form className="contact-input flex-1" onSubmit={handleSubmit}>
              <h1 className="text-[4rem] mb-16 font-semibold">Contact Us</h1>
              <div className="flex gap-10 mb-14">
                <div className="flex-1">
                  <label htmlFor="first-name">First Name</label>
                  <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="last-name">Last Name</label>
                  <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-14">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-14">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-14">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <Button text="Send message" icon={false} className='w-full' type="submit" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
