import { Center, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionText = motion(Text)
function BottomScrollText({yScrollPos}) {
    
    /*
        Welcome content for first ContentBox
    */
    return (
        <Center>
            <MotionText
                    //Animation Settings
                    initial={{
                        opacity: 0, 
                        y: 100
                    }}
                    animate={{ 
                        opacity: yScrollPos > 0 ? [0.5, 1, 0.5] : 0.5,
                        translateY: yScrollPos > 0 ? [0, -50, 0] : 0,
                        y: 0
                    }}
                    transition={{ 
                        type: 'spring', 
                        duration: 2,
                        delay: 1
                    }}

                    //Position Settings
                    pos='fixed' 
                    bottom='0' 
                    mb='1em' 
                    fontSize={12} 
                    opacity={0.5}
            >
                SCROLL DOWN TO START EXPLORING {yScrollPos > 0 ? 'OR SELECT A CIRCLE': ' '}
            </MotionText>
        </Center>
    )
}

export default BottomScrollText;