import React from 'react'

export const Contacts = ({contacts}) => {


    const ContactRow = (contact,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{index + 1}</td>
                  <td>{contact.firstName}</td>
                  <td>{contact.lastName}</td>
                  <td>{contact.email}</td>
              </tr>
          )
    }

    const contactTable = contacts.map((contact,index) => ContactRow(contact,index))

    return(
        <div className="container">
            <h2>Contacts</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Entry</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                    {contactTable}
                </tbody>
            </table>
        </div>
    )
}