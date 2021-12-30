import 'react';
import { Box, Center, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion'

const MotionBox = motion(Box);

function WebDevContent({yScrollPos}) {
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
                Majority of my backend projects are APIs.
            </Text>
            <Text
                fontSize={fontSize}
            >
                For <b>BACKEND</b>, I have experience using API frameworks such as <b>Express with NodeJS</b> and <b>Flask</b>. Most school and personal projects I built usually use NodeJS. For my internship, I used Flask.
            </Text>
            <Text
                fontSize={fontSize}
            >
                For <b>DATABASE</b>, I have experience in <b>relational SQL</b> database like <b>MySQL and Postgres</b>. I also have experience in <b>NoSQL databases</b> primarily <b>MongoDB and some Firebase</b>.
            </Text>
            <Text
                fontSize={fontSize}
            >
                I love learning about new tech stacks, coding practices, and frameworks. I also am very interested in learning about proper coding practices to improve backend efficiency, security, and reliability.
            </Text>
            <Text
                fontSize={fontSize}
            >
                In general, I would say that I would rate my backend development skills an <b>8.5/10</b>.
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

export default WebDevContent;