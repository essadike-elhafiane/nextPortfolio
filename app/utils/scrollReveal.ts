
"use client";
import ScrollReveal from 'scrollreveal';

export const initScrollReveal = (selector: string, config = {}) => {
    const defaultConfig = {
        distance: '40px',
        duration: 600,
        easing: 'ease-out',
        origin: 'bottom',
        interval: 80,
        reset: false,
        mobile: true,
        viewFactor: 0.2,
        ...config
    };
    
    ScrollReveal().reveal(selector, defaultConfig);
};

