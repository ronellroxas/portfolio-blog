import styles from '../styles/IconButton.module.css'
import { Text, Box, Center } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import data from '../static/data'

const MotionBox = motion(Box)
const MotionText = motion(Text)
function IconButton({ yScrollPos, order, textContent, activeNode, setActiveNode }) {
    /*
        Welcome content for first ContentBox
    */
    
    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);
    const [scaleAmount, setScaleAmount] = useState(1);
    const [opacityAmount, setOpacityAmount] = useState(1);
    const [text, setText] = useState(textContent);
    const [fontSize, setFontSize] = useState(16)


    useEffect(() => {
        if (order == 1) setPosX(yScrollPos == 0 ? 0 : -100);
        if (order == 2) setPosY(yScrollPos == 0 ? 0 : 100);
        if (order == 3) setPosX(yScrollPos == 0 ? 0 : 100);
        if (order == 4) setPosY(yScrollPos == 0 ? 0 : -100);
        
        if(activeNode == order) {
            setText(data[order]);
            setFontSize(4);
            setOpacityAmount(1);
            setScaleAmount(4);
            setPosX(0);
            setPosY(0);
        }
        else {
            setText(textContent)
            if (activeNode == 0) setOpacityAmount(1);
            else setOpacityAmount(0);    //hide other nodes if not focus
        }

        return () => {
            setPosX(0);
            setPosY(0);
            setScaleAmount(1);
            setOpacityAmount(1);
            setText(textContent);
            setFontSize(16);
        };
    }, [yScrollPos, activeNode]);

    //animation variants
    const BoxVariant = {
        start: {
            opacity: 0,
            scale: 0,
            x: 0,
            y: 0
        },
        show: {
            borderRadius: activeNode == order ? '20%' : '100%',
            opacity: opacityAmount,
            scale: scaleAmount,
            x: posX,
            y: posY,
            transition: {
                type: 'spring',
                delay: yScrollPos == 0 ? 1: 0
            }
        },
        hover: {
            scale: 1.2,
            x: posX - 20,
            y: posY - 20,
            transition: {
                ease: 'easeOut',
                type: 'spring',
            }
        }
    }

    const textVariants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: yScrollPos == 0 ? 0: 1,
            rotate: -(yScrollPos/100-1)*90,
            transition: {
                delay: 0
            }
        }
    }

    //onclick events
    function selectIcon() {
        window.scrollTo(0, order*100);
        setActiveNode(order == activeNode ? 0 : order);
    }

    return (
        <MotionBox
            className={styles.circle}
            pos='fixed'
            width='28'
            height='28'
            border='2px solid'
            
            //actions
            onClick={selectIcon}

            //Animations
            variants={BoxVariant}
            initial='start'
            animate='show'
            whileHover={yScrollPos == 0 || activeNode == order? {}: 'hover'}
            whileFocus='focus'

        >
            <Center w="100%" h="100%">
                <MotionText 
                    p='1'
                    fontSize={fontSize}

                    variants={textVariants}
                    initial='initial'
                    animate='animate'
                >
                    {text}
                </MotionText>
            </Center>
        </MotionBox>
    )
}

export default IconButton;