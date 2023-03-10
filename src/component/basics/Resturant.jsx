import React, { useState } from 'react'
import "./styles.css"
import Menu from "./menuApi"
import MenuCard from "./MenuCard"
import Navbar from "./Navbar"
import Footer from './Footer'
const uniqueList = [...new Set(Menu.map((curElem) => {//spread operator is necessory or else every element will be at 0 index of uniquelist
    return curElem.category;
})),"All",]

console.log(uniqueList)
const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList,setMenuList] = useState(uniqueList);
    const filterItem = (category) => {
        if(category==="All")
        {
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category
        })
        setMenuData(updatedList);
    }
    return (
        <>
        <Navbar filterItem={filterItem} menuList={menuList}/>
        <MenuCard menuData={menuData} />
        {/* <Footer/> */}
        </>
    )

}

export default Restaurant;
