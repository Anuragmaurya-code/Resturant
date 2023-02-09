import React from 'react'

const Navbar = ({filterItem,menuList}) => {
    return (
        <>
            <nav className='navbar'>
                <div className='btn-group'>

                    {menuList.map((curCat,index) => { 
                        return (
                            <button key={index} className='btn-group__item' onClick={() => filterItem(curCat)}>{curCat}</button>)
                        })}
                </div>
            </nav>
        </>
    )
}

export default Navbar
