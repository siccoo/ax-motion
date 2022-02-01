import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useHistory } from 'react-router-dom';

import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

import AxImg1 from "../assets/images/ax-img1.jpeg";
import AxImg2 from "../assets/images/ax-img2.jpeg";
import AxImg3 from "../assets/images/ax-img3.jpeg";
import AxImg4 from "../assets/images/ax-img4.jpeg";
// import AxImg5 from "../assets/images/ax-img5.jpeg";
import AxImg6 from "../assets/images/ax-img6.jpeg";
import AxImg7 from "../assets/images/ax-img7.jpeg";
import "./style.css";

const axProducts = [
    {
        _id: "1",
        image: AxImg1
    },
    {
        _id: "2",
        image: AxImg2
    },
    {
        _id: "3",
        image: AxImg3
    },
    {
        _id: "4",
        image: AxImg4
    },
    // {
    //     _id: "5",
    //     image: AxImg5
    // },
    {
        _id: "6",
        image: AxImg6
    },
    {
        _id: "7",
        image: AxImg7
    }
];

const imageVariants = {
    visible: {
        opacity: 1,
        scale: 4,
        transition: { duration: 1 }
    },
    hidden: {
        opacity: 0,
        scale: 0
    }
}



const Home = () => {
    const history = useHistory()
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (

        <section>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <div className="ax__hero">
                <motion.h1 className="ax__hero__text">Our Sectors</motion.h1>
                <div className='content__wrap'>
                    <ul className='img__list'>
                        {axProducts.map((item, i) => (
                            <motion.li
                                key={item._id}
                                item={item}
                                animate={{ y: ["0px", "-60px"] }}
                                transition={{
                                    y: {
                                        duration: 1,
                                        yoyo: Infinity,
                                        ease: "easeIn"
                                    }
                                }}
                                scale={{}}
                                onClick={() => history.push("/axhome")}
                            >
                                {/* <Link > */}
                                    <motion.img
                                        src={item.image}
                                        alt='ax-images'
                                        variants={imageVariants}
                                        whileInView={{
                                            scale: 1.2
                                        }}
                                    />
                                {/* </Link> */}
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

    );
};

export default Home;
