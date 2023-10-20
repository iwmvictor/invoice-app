import React, { useEffect, useState } from 'react';

const Home = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    // Retrieve data from local storage when the component mounts
    const storedInvoices = JSON.parse(localStorage.getItem('invoices')) || [];
    setInvoices(storedInvoices);
  }, []);

  return (
    <div>
      <h2>Invoice Data</h2>
      {invoices.length === 0 ? (
        <p>No invoices recorded yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Client Name</th>
              <th>Client Email</th>
              <th>Client City</th>
              <th>Client Country</th>
              <th>Invoice Date</th>
              <th>Payment Terms</th>
              <th>Project Description</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, index) => (
              <tr key={index}>
                <td>{invoice.invoiceId}</td>
                <td>{invoice.clientName}</td>
                <td>{invoice.clientEmail}</td>
                <td>{invoice.clientCity}</td>
                <td>{invoice.clientCountry}</td>
                <td>{invoice.invoiceDate}</td>
                <td>{invoice.paymentTerms}</td>
                <td>{invoice.projectDescription}</td>
                <td>{invoice.amount}</td>
                <td>{invoice.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
