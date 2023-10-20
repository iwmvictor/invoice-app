import React, { useState, useEffect } from "react";
import "../style/styles.css";

const Form = () => {
  const [invoices, setInvoices] = useState([]);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientCity, setClientCity] = useState("");
  const [clientCountry, setClientCountry] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [paymentTerms, setPaymentTerms] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    // Retrieve data from local storage when the component mounts
    const storedInvoices = JSON.parse(localStorage.getItem("invoices")) || [];
    setInvoices(storedInvoices);
  }, []);

  const generateInvoiceId = () => {
    const latestInvoice = invoices[invoices.length - 1];
    if (latestInvoice) {
      const latestId = parseInt(latestInvoice.invoiceId, 10);
      const newId = (latestId + 1).toString().padStart(3, "0");
      return newId;
    } else {
      return "001";
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newInvoiceId = generateInvoiceId();

    const invoiceData = {
      invoiceId: newInvoiceId,
      clientName,
      clientEmail,
      clientCity,
      clientCountry,
      invoiceDate,
      paymentTerms,
      projectDescription,
      amount,
      status,
    };

    // Store the data in local storage
    const updatedInvoices = [...invoices, invoiceData];
    setInvoices(updatedInvoices);
    localStorage.setItem("invoices", JSON.stringify(updatedInvoices));

    // Clear the form fields
    setClientName("");
    setClientEmail("");
    setClientCity("");
    setClientCountry("");
    setInvoiceDate("");
    setPaymentTerms("");
    setProjectDescription("");
    setAmount("");
    setStatus("pending");
  };

  return (
    <div className="form-container">
      <h2>create invoice</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="input-box">
          <label>Client Name:</label>
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <label>Client Email:</label>
          <input
            type="email"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <label>Client City:</label>
          <input
            type="text"
            value={clientCity}
            onChange={(e) => setClientCity(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <label>Client Country:</label>
          <input
            type="text"
            value={clientCountry}
            onChange={(e) => setClientCountry(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <label>Invoice Date:</label>
          <input
            type="date"
            value={invoiceDate}
            onChange={(e) => setInvoiceDate(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <label>Payment Terms:</label>
          <input
            type="date"
            value={paymentTerms}
            onChange={(e) => setPaymentTerms(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <label>Project Description:</label>
          <textarea
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
