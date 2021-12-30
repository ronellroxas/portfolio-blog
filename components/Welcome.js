import 'react';
import { useState, useEffect } from 'react';
import { Center, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import MenuText from './MenuText';
import MenuItems from '../static/menuItems';

const MotionCenter = motion(Center);

function Welcome({activeNode, yScrollPos}) {
    
    const centerVariants = {
        initial: {
            width: '100vw'
        },
        animate: {
            width: yScrollPos == 0 ? '100vw' : "50vw",
            opacity: 1,
            rotate: activeNode == 0 ? 0:-90,
            transition: {
                delay: activeNode != 0 ? 0: 0.5,
                duration: 0.5
            }
        }
    }

    return (
        <MotionCenter
                pos='fixed'
                h='100vh'
                variants={centerVariants}
                initial='initial'
                animate='animate'
        >
            { MenuItems.map((value, index) => {
                return <MenuText key={index} yScrollPos={yScrollPos} content={value} min={index*100} max={index*100+100}/>
            })}
        </MotionCenter>
    )
}

export default Welcome;