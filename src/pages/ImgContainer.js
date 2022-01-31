import React from 'react';

import "./style.css";

const axProducts = [
    {
        _id: "1",
        image: "../assets/images/ax-img1.jpeg"
    },
    {
        _id: "2",
        image: "../assets/images/ax-img2.jpeg"
    },
    {
        _id: "3",
        image: "../assets/images/ax-img3.jpeg"
    },
    {
        _id: "4",
        image: "../assets/images/ax-img4.jpeg"
    },
    {
        _id: "5",
        image: "../assets/images/ax-img5.jpeg"
    },
    {
        _id: "6",
        image: "../assets/images/ax-img6.jpeg"
    }
];

const ImgContainer = () => {
    return (
        <div className='content__wrap'>
            <ul className='img__list'>
                {axProducts.map((item) => (
                    <li key={item._id} item={item}>
                        <a target="_blank" href='/'>
                            <img src={item.image} alt='ax-images' />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ImgContainer;
