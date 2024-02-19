import React, { useContext, useState } from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {FaHeart} from 'react-icons/fa'
import {AuthContext} from '../contexts/AuthProvider'
import Swal from 'sweetalert2'

const Cards = ({item}) => {
  const {name, price, recipe, image, _id} = item;

  const [isHeartFiltered, setIsHeartFiltered] = useState(false);
  const {user} = useContext(AuthContext);
  //console.log(user)

  const navigate = useNavigate();
  const location = useLocation();

  const handleHeartClick = () => {
    setIsHeartFiltered(!isHeartFiltered)
  }

  //add to cart function
  const handleAddToCart = (item) => {
    console.log("Add to cart", item)
    if(user && user?.email){
      const cartItem = {menuItemID: _id, name, quantity:1, price, image, email:user.email};
      //console.log(cartItem)
      fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(cartItem)
      })
      .then(res => res.json()
      .then(data => {
        //console.log(data)
        if(data.insertedId){
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Item added to cart",
            showConfirmButton: false,
            timer: 1500
          });
        }
      }))
    }
    else {
      Swal.fire({
        title: "You are not logged in!!!",
        text: "You must have account to add the items into cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Signup Now!",
      }).then((result) => {
        if(result.isConfirmed) {
          navigate('/signup', {state:{from: location}})
        }
      })
    }
  }

  return (
    <div className="card w-96 bg-white shadow-xl">
      <div className={`rating gap-1 absolute  right-2 top-2 p-4 heartStar bg-orange ${isHeartFiltered ? "text-rose-500" : "text-white"}`} onClick={handleHeartClick}>
        <FaHeart className='h-5 w-5 cursor-pointer'/>
      </div>
      <Link to={`/menu/${item._id}`}>
        <figure>
          <img src={item.image} alt="" className='hover:scale-105 transition-all duration-200 md:h-72'/>
        </figure>
      </Link>
      
      <div className="card-body">
        <Link to={`/menu/${item._id}`}>
          <h2 className="card-title">{item.name}</h2>
        </Link>
        <p>Description</p>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className='font-semibold'><span className='text-sm text-red'>${item.price}</span></h5>
          <button className="btn bg-orange border-none text-white" onClick={() => handleAddToCart(item)}>Add to Cart</button>
        </div>
      </div>
    </div> 
  )
}

export default Cards