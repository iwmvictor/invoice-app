import React, { useState, useEffect } from 'react';
import arrowLeftIcon from '../assets/icon-arrow-left.svg';
import dotIcon from '../assets/dot.png';
import { Link } from 'react-router-dom';

const SinglePage = ({ invoice }) => {
  return (
    <div className="detail-container">
      <div className="detail-content">
        <div className="detail-header">
          <button>
            <Link to="/">
              <img src={arrowLeftIcon} alt="Go Back" /> Go Back
            </Link>
          </button>
        </div>

        {invoice ? (
          <div className="detail-main">
            <div className="detail-main-header">
              <div className="column">
                <div className="project-detail">
                  <p>
                    # <span className="invoice-id">{invoice.invoiceId}</span>
                  </p>
                  <p className="project-title">
                    <span id="project-description">
                      {invoice.projectDescription}
                    </span>
                  </p>
                </div>
                <div className="billfrom-detail">
                  <p className="company-street-address">
                    <span id="street-address">{invoice.streetAddress}</span>
                  </p>
                  <p className="company-city">
                    <span id="city">{invoice.city}</span>
                  </p>
                  <p className="company-postcode">
                    <span id="post-code">{invoice.postCode}</span>
                  </p>
                  <p className="company-country">
                    <span id="country">{invoice.country}</span>
                  </p>
                </div>
              </div>

              <div className="column">
                <div className="detail-date">
                  <div>
                    <label>Invoice date</label>
                    <span id="invoice-date">{invoice.invoiceDate}</span>
                  </div>
                  <div>
                    <label>Payment date</label>
                    <span id="payment-terms">{invoice.paymentTerms}</span>
                  </div>
                </div>
                <div className="billto-detail">
                  <label>Bill To:</label>
                  <p>
                    <span id="client-name">{invoice.clientName}</span>
                  </p>
                  <p>
                    <span id="client-address">{invoice.clientCountry}</span>
                  </p>
                  <p>
                    <span id="client-city">{invoice.clientCity}</span>
                  </p>
                </div>
                <div className="detail-mail">
                  <label>Sent to:</label>
                  <p className="client-email">
                    <span id="client-email">{invoice.clientEmail}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="detail-item-list">
              <div className="item-list-detail">
                <div className="column">
                  <label>Item name</label>
                  <label>Quantity</label>
                  <label>Unit price</label>
                  <label>Total price</label>
                </div>
                <div className="column item-added">
                  <span className="item-added-name" id="item-name">
                    {invoice.itemName}
                  </span>
                  <span className="item-added-qty" id="item-quantity">
                    {invoice.itemQuantity}
                  </span>
                  <span className="item-added-unit-price" id="item-unit-price">
                    {invoice.itemUnitPrice}
                  </span>
                  <span className="item-added-total-price" id="item-total-price">
                    {invoice.itemTotalPrice}
                  </span>
                </div>
              </div>
              <div className="total-amount-due">
                <div className="column">
                  <div>
                    <label>Amount Due</label>
                  </div>
                  <div>
                    <span className="total-amount" id="total-amount">
                      {invoice.amount}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default SinglePage;
