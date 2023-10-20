import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import arrowRightIcon from "../assets/icon-arrow-right.svg";
import dotIcon from "../assets/dot.png";
import plusIcon from "../assets/icon-plus.svg";
import logoImage from "../assets/logo.png";
import sunIcon from "../assets/icon-sun.svg";
import moonIcon from "../assets/icon-moon.svg";
import userImage from "../assets/image-avatar.jpg";
import arrowDownIcon from "../assets/icon-arrow-down.svg";
import "../style/styles.css";
import CreateInvoice from "./form";

Modal.setAppElement("#root");

const Landing = () => {
  const [invoices, setInvoices] = useState([]);
  const [formPopup, setFormPopup] = useState(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [filteredStatus, setFilteredStatus] = useState([]);
  const [filteredInvoices, setFilteredInvoices] = useState([]);

  useEffect(() => {
    const storedInvoices = JSON.parse(localStorage.getItem("invoices")) || [];
    setInvoices(storedInvoices);
  }, []);

  function handleStatusFilter(status) {
    if (status === "All") {
      setFilteredStatus([]);
    } else {
      if (filteredStatus.includes(status)) {
        setFilteredStatus(filteredStatus.filter((s) => s !== status));
      } else {
        setFilteredStatus([...filteredStatus, status]);
      }
    }
  }

  useEffect(() => {
    const statusBtns = document.querySelectorAll(".status-btn");

    statusBtns.forEach((btn) => {
      const textContent = btn.textContent.trim();

      switch (textContent) {
        case "pending":
          btn.style.backgroundColor = "rgba(255, 143, 0, 0.06)";
          btn.style.color = "#ff8f00";
          break;
        case "paid":
          btn.style.backgroundColor = "rgba(51, 214, 159, 0.06)";
          btn.style.color = "#33d69f";
          break;
        default:
          // Default styles (if the status is not 'pending', 'paid', or 'draft')
          btn.style.backgroundColor = "rgba(223, 227, 250, 0.06)";
          btn.style.color = "#fff";
      }
    });
  }, []);

  useEffect(() => {
    if (filteredStatus.length === 0) {
      setFilteredInvoices(invoices);
    } else {
      const filtered = invoices.filter((invoice) =>
        filteredStatus.includes(invoice.status)
      );
      setFilteredInvoices(filtered);
    }
  }, [filteredStatus, invoices]);

  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <img src={logoImage} alt="Logo" />
        </div>
        <div className="theme">
          <img src={sunIcon} alt="Sun Icon" />
        </div>
        <hr />
        <div className="user">
          <img src={userImage} alt="User" />
        </div>
      </div>

      <div className="main">
        <div className="main-header">
          <div className="header-text">
            <h1>Invoices</h1>
            <p>
              There are{" "}
              <span className="total-invoice">{filteredInvoices.length}</span>{" "}
              total invoices
            </p>
          </div>
          <div className="filter dropdown">
            <button
              className="dropdown-button"
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
            >
              Filter by Status
            </button>
            {showFilterDropdown && (
              <div className="dropdown-content">
                <label>
                  <input
                    type="checkbox"
                    checked={filteredStatus.includes("")}
                    onChange={() => handleStatusFilter("All")}
                  />{" "}
                  All
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={filteredStatus.includes("paid")}
                    onChange={() => handleStatusFilter("paid")}
                  />{" "}
                  Paid
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={filteredStatus.includes("pending")}
                    onChange={() => handleStatusFilter("pending")}
                  />{" "}
                  Pending
                </label>
              </div>
            )}
          </div>
          <div className="header-button">
            <button onClick={() => setFormPopup(true)}>
              <img src={plusIcon} alt="Plus Icon" /> New Invoice
            </button>
          </div>
        </div>

        <Modal isOpen={formPopup}>
          <div className="modal">
            <div className="modal-overlay"></div>
            <div className="modal-content">
              <button className="closebtn" onClick={() => setFormPopup(false)}>
                X
              </button>
              <CreateInvoice />
            </div>
          </div>
        </Modal>

        <div className="main-content">
          {filteredInvoices.map((invoice, index) => (
            <Link to="/invoice" className="invoice-data" key={index}>
              <div className="invoice-id">
                <span className="exist-symbol">#</span> {invoice.invoiceId}
              </div>
              <div className="due-date">
                <span className="exist-symbol">Due</span> {invoice.invoiceDate}
              </div>
              <div className="client-name">{invoice.clientName}</div>
              <div className="amount-due">
                <span className="exist-symbol">€</span> {invoice.amount}
              </div>
              <div>
                <span className="status-btn">
                  <img src={dotIcon} alt="Status Icon" />
                  {invoice.status}
                </span>
                <img src={arrowRightIcon} alt="Arrow Right Icon" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
