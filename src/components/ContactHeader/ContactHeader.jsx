import styles from "./ContactHeader.module.css";
const ContactHeader = () => {
  return (
    <div className={`contaciner ${styles.contact_section}`}>
      <h1>CONNECT WITH US</h1>
      <p >
      Our dedicated team eagerly awaits your reach-out! Be it an inquiry, feedback, or a simple desire to engage, feel free to connect with us via the convenient contact form on this page or through the channels of phone, email, or social media. We can't wait to hear from you!.{" "}
      </p>
    </div>
  );
};

export default ContactHeader;