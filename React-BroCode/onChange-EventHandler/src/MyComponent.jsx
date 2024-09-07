import React, {useState} from 'react';
function MyComponent(){
    const[name,setName] = useState("");
    const[quantity, setQuantity] = useState(0);
    const [comment,setComment] = useState("");
    const [payment,setPayment] = useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setComment(event.target.value);
    }
    return(
        <div>
            <input value ={name} onChange = {handleNameChange} /> 
            <p>Name: {name}</p>

            <input value = {quantity} onChange = {handleQuantityChange} type = "number"/>
            <p>Quantity: {quantity}</p>

            <input value ={comment} onChange = {handleCommentChange} /> 
            <p>Comment: {comment}</p>

            <select value = {payment} onChange = {handlePaymentChange}>
                <option value = "">Select an Option</option>
                <option value = "visa">Visa</option>
                <option value = "mastercard">MasterCard</option>
                <option value = "upi">GooglePay/Paytm/UPI</option>
            </select>
            <p>Payment: {payment}</p>
        </div>
    );
}

export default MyComponent;