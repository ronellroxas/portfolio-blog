import 'react';
import { Box, Center, Text, Icon, useToast } from '@chakra-ui/react';
import {FaLinkedin, FaGithubSquare, FaGooglePlusSquare} from 'react-icons/fa'

import { motion } from 'framer-motion'


const MotionBox = motion(Box);

function OtherContent({yScrollPos}) {
    const fontSize = 3;
    const toast = useToast();
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
    
    function emailClick() {
        navigator.clipboard.writeText('ronell_roxas@dlsu.edu.ph');
        toast({
            position: 'bottom',
            render: () => (
                <Box color='black' p={5} bg='white' borderRadius={10}>
                  Email copied to Clipboard!
                </Box>
            )
          })
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
                In summary, I am a full stack developer and I like <b>WEB DEVELOPMENT</b>. I am also really interested in <b>DATASCIENCE</b>.
            </Text>
            <Text
                fontSize={fontSize}
            >
                I love challenges and learning about new technology, practices, and web frameworks. 
            </Text>
            <Text
                fontSize={fontSize}
            >
                Hopefully you had a seamless experience navigating through the website. I plan to continously update this website from time to time.
            </Text>
            <Text
                fontSize={fontSize}
            >
                Thank you for visiting! You can find me in the links below.
            </Text>
            <Icon as={FaLinkedin} boxSize='2' onClick={() => window.open('https://www.linkedin.com/in/ronell-john-roxas-9843b9154/', '_blank')}/>
            <Icon as={FaGithubSquare} boxSize='2' onClick={() => window.open('https://github.com/ronellroxas', '_blank')}/>
            <Icon as={FaGooglePlusSquare} boxSize='2' onClick={emailClick}/>
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

export default OtherContent;