import React from "react";

function Contact() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/abrishkena/",
      ariaLabel: "LinkedIn Profile",
      iconClass: "bi bi-linkedin",
      textClass: "text-primary",
    },
    {
      href: "https://github.com/AbrehamAmesa",
      ariaLabel: "GitHub Profile",
      iconClass: "bi bi-github",
      textClass: "text-light",
    },
    {
      href: "https://twitter.com/yourprofile",
      ariaLabel: "Twitter Profile",
      iconClass: "bi bi-twitter",
      textClass: "text-info",
    },
  ];

  return (
    <section id="contact" className="py-5 bg-dark text-light">
      <h2 className="text-center text-primary mb-4">Contact Me</h2>
      
      {/* Social Links */}
      <div className="d-flex justify-content-center gap-4 mb-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
            aria-label={link.ariaLabel}
          >
            <i className={`${link.iconClass} ${link.textClass} fs-1`}></i>
          </a>
        ))}
      </div>
      
      {/* Email Section */}
      <div className="text-center">
        <h5 className="mb-3">Email Me At</h5>
        <a
          href="mailto:abrehamamesw@gmail.com"
          className="text-decoration-none text-primary fs-5"
        >
          abrehamamesw@gmail.com
        </a>
      </div>
    </section>
  );
}

export default Contact;
