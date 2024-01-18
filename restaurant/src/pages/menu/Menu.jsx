import React, { useEffect } from 'react'
import { useState } from 'react'

const Menu = () => {
    const [menu, setmMenu] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortOption, setSortOption] = useState("default");

    // loading data
    useEffect(() => {
        //fetch data from the backend
        const fetchData = async () => {
            try{
                const response = await fetch("/menu.json");
                const data = await response.json();
                // console.log(data)
                setMenu(data);
                setFilteredItems(data);
            } catch(error){
                console.log("Error fetching data", error)
            }
        };

        //function calling
        fetchData();
    }, [])

    //filtering data based on category
    const filterItems = (category) => {
        const filtered = category === "all" ? menu : menu.filter((item) => item.category === category);
        setFilteredItems(filtered);
        setSelectedCategory(category);
    }

    //show all data
    const showAll = () => {
        setFilteredItems(menu);
        setSelectedCategory("all");
    }

  return (
    <div>
        {/* menu banner */}
        <div className='max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC]to 100%'>
            <div className='py-48 flex flex-col justify-center items-center gap-8'>
                <div className='text-center space-y-7 px-4'>
                    <h2 className='md:text:5xl text-4xl font-bold md:leading-snug leading-snug'>For the Love of Delicious <span className='text-orange'>Food</span></h2>
                    <p className='text-[#4A4A4A] text-xl md:w-4/5 mx-auto'>Come with the family & feel joy of mouthwatering food such as 
                    Greek Salad, lasagna, Butternut Pumpkin, Tokusen Wagyu, Olivas Rellenas and more for a moderate cost</p>
                    <button className='btn bg-orange border-none px-8 py-3 font-semibold text-white rounded-full'>Order Now</button>
                </div>
            </div>
        </div>

        {/* menu items */}
        <div className='section-container'>

        </div>
    </div>
  )
}

export default Menu