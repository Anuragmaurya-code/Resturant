import React from 'react'

const MenuCard = ({ menuData }) => {
    return (
        <>
        <section className="main-card--container">
            {
                menuData.map((curElem, index) => {
                    const {id,name,image,description,category}=curElem;
                    return (
                            <div className='card-container' key={id}>
                                <div className='card' >
                                    <div className='card-body' >
                                        <span className='card-number card-circle subtle'>{id}</span>
                                        <span className='card-author subtle'>{name}</span>
                                        <h2 className='card-title'>{name}</h2>
                                        <span className='card-discription subtle'>{description}</span>
                                        <div className="card-read">Read</div>
                                    </div>
                                    <img className="card-media" src={image} alt="images" />
                                    <span className="card-tag subtle">Order Now</span>
                                </div>
                            </div>
                    )
                })        
            }
            </section>

        </>
    )
}

export default MenuCard
