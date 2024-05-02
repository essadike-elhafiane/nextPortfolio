"use client"

import 
React, { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import '@/app/globals.css';

const LinksComponent = () => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(
            'a',
            {
                x: [10, 0], // Slide from 50px above to 0px
                opacity: [0, 1],
            },
            {
                duration: 0.1,
                delay: stagger(0.1), // Stagger by 0.3 seconds
                ease: 'easeInOut',
            }
        );
    }, [animate]);

    return (
        <div className="absolute mt-[210px] w-[50%] min-w-[60px] max-w-[180px] flex flex-col containerNav z-[100]" ref={scope}>
            <a href="#Home" className="text-sm font-medium w-full text-center p-2">Home</a>
            <a href="#About" className="text-sm font-medium w-full text-center p-2">About</a>
            <a href="#Services" className="text-sm font-medium w-full text-center p-2">Services</a>
            <a href="#Projects" className="text-sm font-medium w-full text-center p-2">Projects</a>
            <a href="#Contact" className="text-sm font-medium w-full text-center p-2">Contact</a>
        </div>
    );
};

export default LinksComponent;