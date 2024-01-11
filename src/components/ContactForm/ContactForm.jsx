import Button from "../Button/Button"; // Import Button component from "../Button/Button"
import styles from "./Contact.module.css"; // Import CSS styles from "./Contact.module.css"
import { MdMessage } from "react-icons/md"; // Import MdMessage icon from react-icons/md
import { FaPhoneAlt } from "react-icons/fa"; // Import FaPhoneAlt icon from react-icons/fa
import { HiMail } from "react-icons/hi"; // Import HiMail icon from react-icons/hi
import { useState } from "react"; // Import useState hook from React

const ContactForm = () => {
  const [name, setName] = useState("Everyone"); // Define state variable name and its setter, initialized with "Everyone"
  const [email, setEmail] = useState("  support @CollegeInsightsUnlocked"); // Define state variable email and its setter, initialized with "  support @CollegeInsightsUnlocked"
  const [text, setText] = useState("Subscribe to this channel"); // Define state variable text and its setter, initialized with "Subscribe to this channel"

  const onSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    setName(event.target[0].value); // Set the value of name state to the input value at index 0 in the form
    setEmail(event.target[1].value); // Set the value of email state to the input value at index 1 in the form
    setText(event.target[2].value); // Set the value of text state to the input value at index 2 in the form
  };

  return (
    <section className={styles.container}> {/* Render a section element with the class name from the imported styles */}
      <div className={styles.contact_form}> {/* Render a div element with the class name from the imported styles */}
        <div className={styles.top_btn}> {/* Render a div element with the class name from the imported styles */}
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />} // Render the MdMessage icon from react-icons/md as the icon prop
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} /> {/* Render the FaPhoneAlt icon from react-icons/fa as the icon prop */}
        </div>
        <Button
          isOutline={true}
          text="Through an email form"
          icon={<HiMail fontSize="24px" />} // Render the HiMail icon from react-icons/hi as the icon prop
        />

        <form onSubmit={onSubmit}> {/* Render a form element with the onSubmit event handler set to the onSubmit function */}
          <div className={styles.form_control}> {/* Render a div element with the class name from the imported styles */}
            <label htmlFor="name">Name</label> {/* Render a label element with the "for" attribute set to "name" */}
            <input type="text" name="name" /> {/* Render an input element of type "text" with the name attribute set to "name" */}
          </div>
          <div className={styles.form_control}> {/* Render a div element with the class name from the imported styles */}
            <label htmlFor="email">Email</label> {/* Render a label element with the "for" attribute set to "email" */}
            <input type="email" name="email" /> {/* Render an input element of type "email" with the name attribute set to "email" */}
          </div>
          <div className={styles.form_control}> {/* Render a div element with the class name from the imported styles */}
            <label htmlFor="text">Text</label> {/* Render a label element with the "for" attribute set to "text" */}
            <textarea name="text" rows="8" /> {/* Render a textarea element with the name attribute set to "text" and rows attribute set to 8 */}
          </div>
          {/* <div className={styles.contactt_image}>
        <img src="/images/contact.jpg" alt="contact image" />
      </div> */}
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT HERE" /> {/* Render a Button component with the text prop set to "SUBMIT HERE" */}
          </div>

          <div>{name + " " + email + " " + text}</div> {/* Render the concatenated value of name, email, and text */}
        </form>
      </div>
      <div className={styles.contact_image}> {/* Render a div element with the class name from the imported styles */}
        <img src="/images/contact.jpg" alt="contact image" /> {/* Render an image element with the source and alt attributes */}
      </div>
     
    </section>
  );
};

export default ContactForm; // Export the ContactForm component as the default export



