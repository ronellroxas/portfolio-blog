import styles from '../styles/IconButton.module.css'
import { Text, Box, Center } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import data from '../static/data'
import BackEndContent from './BackEndContent'
import FrontEndContent from './FrontEndContent'
import PythonContent from './PythonContent'
import OtherContent from './OtherContent'

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

    const setContent = () => {
        if(activeNode == 0) {
            return (
                <MotionText 
                    fontSize={fontSize}

                    variants={textVariants}
                    initial='initial'
                    animate='animate'
                >
                    {text}
                </MotionText>
            )
        }
        if (activeNode == 1) return  <BackEndContent yScrollPos={yScrollPos}/>
        if (activeNode == 2) return  <FrontEndContent yScrollPos={yScrollPos}/>
        if (activeNode == 3) return  <PythonContent yScrollPos={yScrollPos}/>
        if (activeNode == 4) return  <OtherContent yScrollPos={yScrollPos}/>
    }

    useEffect(() => {
        if (order == 1) setPosX(yScrollPos == 0 ? 0 : -100);
        if (order == 2) setPosY(yScrollPos == 0 ? 0 : 100);
        if (order == 3) setPosX(yScrollPos == 0 ? 0 : 100);
        if (order == 4) setPosY(yScrollPos == 0 ? 0 : -100);
        
        if(activeNode == order) {
            setFontSize(4);
            setOpacityAmount(1);
            setScaleAmount(5);
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
        if(activeNode == 0 || activeNode == order) {
            window.scrollTo(0, order*100);
            setActiveNode(order == activeNode ? 0 : order);
        }
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
                {setContent()}
            </Center>
        </MotionBox>
    )
}

export default IconButton;