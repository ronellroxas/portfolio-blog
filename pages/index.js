import Head from 'next/head'
import Welcome from '../components/Welcome'
import BottomScrollText from '../components/BottomScrollText'
import RotatingIcons from '../components/RotatingIcons'
import { Center, HStack } from '@chakra-ui/layout'
import { useState, useEffect } from 'react'
import Guide from '../components/Guide'
import { useDisclosure } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Text
} from '@chakra-ui/react'


export default function Home() {
  const [yScrollPos, setYScrollPos] = useState(0);
  const [start, setStart] = useState(true);
  const [activeNode, setActiveNode] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        function handleScroll() {
            var newY = Math.ceil(window.scrollY/100)*100;
            
            //reach end
            if(newY >= 500) {
              window.scrollTo(0, 0);
              newY = 0;
            }

            setYScrollPos(newY);
        }

        setStart(false);
        window.addEventListener('scroll', handleScroll, false);
        
        return () => {
            window.removeEventListener('scroll', handleScroll, false);
        };
    }, [yScrollPos]);

  return (
    <>
      <Head>
        <title>RNL RXS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Guide onOpen={onOpen}/>
      <Center>
        <HStack w='100vw' h='100vh'>
          <Welcome yScrollPos={yScrollPos} activeNode={activeNode}/>
          <RotatingIcons yScrollPos={yScrollPos} activeNode={activeNode} setActiveNode={setActiveNode}/>
        </HStack>
      </Center>
      
      <BottomScrollText yScrollPos={yScrollPos}/>
      
      {/** MODAL */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor='#171717'>
          <ModalHeader>NAVIGATION GUIDE</ModalHeader>
          
          <ModalBody>
            <Text>USE MOUSE AND LAPTOP/DESKTOP</Text>
            <Text fontSize={14} opacity={0.6}>It is recommended to use a mouse for scrolling since it is easier to control. The website currently is not optimized for mobile devices or low resolution devices.</Text>
            <Text>ONE SCROLL AT A TIME</Text>
            <Text fontSize={14} opacity={0.6}>The main navigation of the website is through mouse scrolls. The website currently has minimal scroll tracking and optimization so large scrolls may lag animations.</Text>
            <Text>SELECT A CIRCLE</Text>
            <Text fontSize={14} opacity={0.6}>You can also click on the circles on the right that will appear after the Welcome Screen for navigation and to view its contents.</Text>
            <Text>WAIT FOR ANIMATIONS TO END</Text>
            <Text fontSize={14} opacity={0.6}>Registering a different scroll event or animation may lag other animations. Wait for each animation to end before continuing.</Text>
          </ModalBody>

          <ModalFooter>
              <Text fontSize={12} opacity={0.2} onClick={onClose} cursor='pointer'>CLICK TO CLOSE</Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
