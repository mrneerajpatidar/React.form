import React, { useRef, useEffect } from 'react';

const SimpleForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    // Auto-focus on the Name input field when the component mounts
    nameRef.current.focus();
  }, []);

  const handleSubmit = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!name) {
      nameRef.current.focus();
    } else if (!email) {
      emailRef.current.focus();
    } else if (!password) {
      passwordRef.current.focus();
    } else {
      alert('Form Submitted Successfully!');
      // Optionally, you can clear the input fields after submission
      nameRef.current.value = '';
      emailRef.current.value = '';
      passwordRef.current.value = '';
      nameRef.current.focus(); // Re-focus on Name after submission
    }
  };

  return (
    <div>
      <h1>Simple Form</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <div>
          <label>Name:</label>
          <input type="text" ref={nameRef} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" ref={emailRef} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" ref={passwordRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SimpleForm;
