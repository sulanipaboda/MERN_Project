import React, { useContext, useState } from 'react'
import useCart from '../../hooks/useCart'
import { FaTrash } from 'react-icons/fa'
import Swal from 'sweetalert2'
import { AuthContext } from '../../contexts/AuthProvider'

const Cart = () => {
    const [cart, refetch] = useCart();
    const {user} = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);


    //delete cart items
    const handleDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Remove"
        }).then((result) => {
            if(result.isConfirmed) {
                fetch(`http://localhost:3000/cart/${item.id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        refetch()
                        Swal.fire({
                            title: "Deleted",
                            text: "Item Removed!",
                            icon: "success",
                        });
                    }
                })
           }
        })
    }

    //handle decrease
    const handleDecrease = (item) => {
        //console.log(item._id)
        if(item.quantity > 1){
            fetch(`http://localhost:3000/cart/${item._id}`, {
            method: "PUT",
            headers: {
                "Content-type": "apploication/json; charset=UTF-8"
            },
            body: JSON.stringify({quantity: item.quantity - 1})
        })
        .then(res => res.json())
        .then(data => {
            const updatedCart = cartItems.map((cartItem) => {
                if(cartItem.id === item.id){
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity - 1
                    }
                }
                return cartItem;
            })
            refetch();
            setCartItems(updatedCart);
        })
        refetch();
        } else{
            alert("Item quantity cannot be zero")
        }
    }

    //handle increase
    const handleIncrease = (item) => {
        //console.log(item._id)
        fetch(`http://localhost:3000/cart/${item._id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ quantity: item.quantity + 1 }),
        })
        .then(res => res.json())
        .then(data => {
            const updatedCart = cartItems.map((cartItem) => {
                if(cartItem.id === item.id){
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity + 1
                    }
                }
                return cartItem;
            })
            refetch();
            setCartItems(updatedCart);
        })
        refetch();
    }

    //calculate price
    const calculatePrice = (item) => {
        return item.price * item.quantity;
    }

    //calculate total price
    const cartSubTotal = cart.reduce((total, item) => {
        return total + calculatePrice(item); 
    }, 0)

    const orderTotal = cartSubTotal;
    
  return (
    <div className='section-container'>
        {/* banner */}
        <div className='max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC]to 100%'>
            <div className='py-24 flex flex-col  justify-center items-center gap-8'>
                <h2 className='md:text:5xl text-4xl font-bold md:leading-snug leading-snug'>Items Added to the <span className='text-orange'>Cart</span></h2>
            </div>
        </div>

        {/* table */}
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead className='bg-orange text-white rounded-sm'>
                <tr>
                    <th>#</th>
                    <th>Food</th>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                    {
                        cart.map((item, index) => (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className='font-medium'>{item.name}</td>
                                <td>
                                    <button className='btn btn-xs p-4' onClick={() => handleDecrease(item)}>-</button>
                                    <input type='number' value={item.quantity} onChange={() => console.log(item.quantity)} className='w-10 mx-2 text-center overflow-hidden appearance-none' />
                                    <button className='btn btn-xs p-4' onClick={() => handleIncrease(item)}>+</button>
                                </td>
                                <td>${calculatePrice(item).toFixed(2)}</td>
                                <th>
                                    <button className="btn btn-ghost text-red btn-xs" onClick={() => handleDelete(item)}>
                                        <FaTrash />
                                    </button>
                                </th>
                            </tr>
                        ))   
                    }
                </tbody>
            </table>
        </div>
 
        <div className='my-12 flex flex-col md:flex-row justify-between items-start'>
            {/* customer details */}
            <div className='md:w-1/2 space-y-3'>
                <h3 className='font-medium'>Customer Details</h3>
                <p>Name: {user.displayName}</p>
                <p>Email: {user.email}</p>
            </div>

            {/* cart total */}
            <div className='md:w-1/2 space-y-3'>
                <h3 className='font-medium'>Cart Details</h3>
                <p>No. of Items: {cart.length}</p>
                <p>Total Price: ${orderTotal.toFixed(2)}</p>
                <button className='btn bg-orange border-none text-white'>Proceed to Checkout</button>
            </div>
        </div>
    </div>   
  )
}

export default Cart
