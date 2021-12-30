import 'react';
import { Box, Center, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion'

const MotionBox = motion(Box);

function PythonContent({yScrollPos}) {
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
                For <b>AI MODELS</b>, I love doing machine learning and deep learning research. 
            </Text>
            <Text
                fontSize={fontSize}
            >
                For <b>DATASCIENCE</b>, I enjoy doing datascience a lot and I am really interested in learning more. 
            </Text>
            <Text
                fontSize={fontSize}
            >
                In general, I would rate my python skills a 9/10. I really enjoy CS research and DataScience.
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

export default PythonContent;