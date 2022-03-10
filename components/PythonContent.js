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
                I like using python since I am very interested in AI Models and DataScience research.
            </Text>
            <Text
                fontSize={fontSize}
            >
                For <b>AI MODELS</b>, I have experience in performing Facial Emotion Recognition and image processing. For my thesis, it is focused on NLP Personality Recognition. Most of my academic projects are NLP related.
            </Text>
            <Text
                fontSize={fontSize}
            >
                For <b>DATASCIENCE</b>, I enjoy doing datascience a lot and I am really interested in learning more. I have experience in processing geospatial data from our DataScience class.
            </Text>
            <Text
                fontSize={fontSize}
            >
                My internship also used Python which involves data transformations.
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