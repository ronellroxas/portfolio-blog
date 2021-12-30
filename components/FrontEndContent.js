import 'react';
import { Box, Center, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion'

const MotionBox = motion(Box);

function AppDevContent({yScrollPos}) {
    const fontSize = 3;

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
    
    return (
        <MotionBox p='1'
            variants={textVariants}
            initial='initial'
            animate='animate'
        >
            <Text
                fontSize={fontSize}
            >
                For <b>FRONTEND</b>, I have experience using <b>React and NextJS</b>. This website is built using NextJS with <b>Chakra-UI and FramerMotion</b> for the animations. I used NextJS since I've been interested in learning it for quite a while now and Chakra-UI since it has compatibility with FramerMotion.
            </Text>
            <Text
                fontSize={fontSize}
            >
                I love learning about new frontend frameworks. This website was a result of me challenging myself to build a website using a new framework for me (NextJS) and an animation library (FramerMotion) since I've been interested in both lately.
            </Text>
            <Text
                fontSize={fontSize}
            >
                In general, I would rate my frontend skills a <b>7/10</b>. Mainly because I find designing a little bit of a challenge and there is so much more practices I want to learn to build an efficient and responsive frontend UI. 
            </Text>

            {/** CLOSE TEXT */}
            <Center>
                <Text 
                    fontSize={2} 
                    opacity={0.4} 
                >
                    CLICK BOX TO CLOSE
                </Text>
            </Center>
        </MotionBox>
    )
}

export default AppDevContent;