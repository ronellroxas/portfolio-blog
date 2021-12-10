import 'react';
import { useState, useEffect } from 'react';
import { Center, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionText = motion(Text);

function MenuText({yScrollPos, content, min, max}) {
    const [opacity, setOpacity] = useState(0);    
    const [yPos, setYPos] = useState(0);
    

    useEffect(() => {
        if(yScrollPos >= min && yScrollPos < max) {
            setOpacity(1);
            setYPos(0);
        }
        else if (yScrollPos < min) {
            setOpacity(0);
            setYPos(100);
        }
        else if (yScrollPos >= max) {
            setOpacity(0);
            setYPos(-100);
        }

        return () => {
            setOpacity(1);
            setYPos(0);
        }
    }, [yScrollPos]);

    //animation
    const textVariant = {
        initial: {
            x: -50,
            y: 0,
            opacity: 0
        },
        animate: {
            x: 0,
            y: yPos,
            opacity: opacity,
            transition: {
                type: 'spring', 
                duration: 1
            }
        }
    }

    return (
        <MotionText fontSize={64}
            pos='fixed'
            variants={textVariant}
            initial='initial'
            animate='animate'
        >{content}</MotionText>

    )
}

export default MenuText;