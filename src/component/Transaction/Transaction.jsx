import React from 'react'
import "./transaction.css"
const Transaction = ({data}) => {
  return (
    <div className="transaction-container">
      <div className="transact-detail">
        transaction details
      </div>
      <table className="transaction-table">
        <thead>
          <tr>
            {/* <th>Id</th> */}
            <th>itemName</th>
            <th>Quantity</th>
            <th>AmountSold</th>
                      <th>CustomeName</th>
                      <th>Delete</th>
          </tr>
        </thead>
        <tbody>
                  {
                      data.transaction.map((er) => (
                          <tr  key={er.id}>
                          {/* <td>{er.id}</td> */}
                          <td>{er.product.name}</td>
                          <td>{er.quantity}</td>
                          <td>{er.pricesold}</td>
                          <td>{ er.customer.name}</td>
                          </tr>
                      ))
                  }
                  </tbody>
      </table>
    </div>
  );
}

export default Transaction
