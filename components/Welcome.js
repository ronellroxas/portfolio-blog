import 'react';
import { useState, useEffect } from 'react';
import { Center, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import MenuText from './MenuText';

const MotionCenter = motion(Center);

function Welcome({yScrollPos}) {

    const centerVariants = {
        initial: {
            width: '100vw'            
        },
        animate: {
            width: yScrollPos == 0 ? '100vw' : "50vw",
            transition: {
                delay: 0.5,
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
            <MenuText yScrollPos={yScrollPos} content={"WELCOME"} min={0} max={100}/>
            <MenuText yScrollPos={yScrollPos} content={"WEBDEV"} min={100} max={200}/>
            <MenuText yScrollPos={yScrollPos} content={"APPDEV"} min={200} max={300}/>
            <MenuText yScrollPos={yScrollPos} content={"ABOUT ME"} min={300} max={400}/>
            <MenuText yScrollPos={yScrollPos} content={"OTHERS"} min={400} max={500}/>
        </MotionCenter>
    )
}

export default Welcome;