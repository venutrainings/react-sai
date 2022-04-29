import React from 'react';

const Component4 = (props) => {
    const {data}=props;
    const {id,name,username,email,address}=data;
  return (
    <>
         <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{address.street}</td>           
        </tr>
    
    </>
  )
};

export default Component4;