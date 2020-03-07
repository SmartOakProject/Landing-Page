import React, { useRef, useEffect } from 'react';
import * as _ from 'underscore';
import headerBg from '../../images/header-bg.jpeg';

const Header = ({ children }) => {
    const image = useRef();

    const handleNavigation = () => {
        window.requestAnimationFrame(() => {
            if (image.current) {
                let scrollPercent = (window.pageYOffset / image.current.offsetHeight) * 100;
                const factor = 3.4;
                let currentScroll = scrollPercent / factor + 70;

                if (image.current.offsetHeight >= window.pageYOffset - 50) {
                    image.current.style.clipPath = `polygon(0 0, 100% 0, 100% ${currentScroll}%, 32% 100%, 0 ${currentScroll}%)`;

                    image.current.style.WebkitClipPath = `polygon(0 0, 100% 0, 100% ${currentScroll}%, 32% 100%, 0 ${currentScroll}%)`;
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', _.throttle(handleNavigation, 50));
        return () => {
            window.removeEventListener('scroll', handleNavigation);
        };
    }, []);

    return (
        <div
            ref={image}
            style={{
                WebkitClipPath: `polygon(0 0, 100% 0, 100% 70%, 32% 100%, 0 70%)`,
                clipPath: `polygon(0 0, 100% 0, 100% 70%, 32% 100%, 0 70%)`,
                width: '100%',
                height: '86vh',
                zIndex: '999',
                position: 'relative',
                WebkitTransform: 'translate3d(0, 0, 0)',
                transform: 'translate3d(0, 0, 0)',
                // transition: "height 999999s",
                willChange: 'transform',
                background: `url(${headerBg}) no-repeat center center / cover`,
            }}
        >
            {children}
        </div>
    );
};

export default Header;
