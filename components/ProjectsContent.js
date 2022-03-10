import 'react';
import { Box, Center, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionBox = motion(Box);

function ProjectsContent({yScrollPos}) {
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
                For <b>Academic projects</b>, I mainly use NodeJS, Express, and MongoDB. Access one of them <Link href="https://yummers.herokuapp.com/" passHref><a target="_blank" rel="noopener noreferrer">here</a></Link> which is a cooking recipe website.
            </Text>
            <Text
                fontSize={fontSize}
            >
                I was also a <b>full stack developer</b> for one academic project using NodeJS and React. It's a simple parcel delivery system that involves user registration using Google OAuth2.0, parcel booking, tracking, and creating waybills. Access it <Link href="https://pelican-express-development.herokuapp.com/" passHref><a target="_blank" rel="noopener noreferrer">here</a></Link>.
            </Text>
            
            <Text
                fontSize={fontSize}
            >
                For my <b>Internship</b> at <b>COBENA</b>, I learned how to use Flask and PostgreSQL to build an API.
            </Text>
            <Text
                fontSize={fontSize}
            >
                For <b>Personal projects</b> other than this portfolio blog website, I created a Stem player website inspired by Kanye West's stem player website using NextJS and Framer Motion as well. I wanted to practice adding audio and using buckets specifically AWS S3. Access it <Link href="https://stem-player.vercel.app/" passHref><a target="_blank" rel="noopener noreferrer">here</a></Link>.
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

export default ProjectsContent;