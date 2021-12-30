import { Box, Center, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { InfoOutlineIcon } from '@chakra-ui/icons'

const MotionCenter = motion(Center)
const MotionBox = motion(Box)

function Guide({onOpen}) {


    const GuideVariants = {
        initial: {
            opacity: 0,
            scale: 1,
            x:0,
            y:0
        },
        animate: {
            opacity: 0.5,
            transition: {
                duration: 0.8
            }
        },
        hover: {
            opacity: 1,
            transition: {
                duration: 0.8
            }
        }
    }
    /*
        Welcome content for first ContentBox
    */
    return (
        <MotionBox
            m={3} 
            variants={GuideVariants}
            initial='initial'
            animate='animate'
            whileHover={'hover'}
            cursor='pointer'

            onClick={onOpen}
        >
            <Text 
                fontSize={12}
            >
                <InfoOutlineIcon size='sm' mr={2}/>
                NAVIGATION GUIDE
            </Text>
        </MotionBox>
    )
}

export default Guide;