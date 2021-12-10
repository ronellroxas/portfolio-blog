import Head from 'next/head'
import Welcome from '../components/Welcome'
import BottomScrollText from '../components/BottomScrollText'
import RotatingIcons from '../components/RotatingIcons'
import { Center, HStack } from '@chakra-ui/layout'
import { useState, useEffect } from 'react';

export default function Home() {
  const [yScrollPos, setYScrollPos] = useState(0);
  const [start, setStart] = useState(true);

    useEffect(() => {
        function handleScroll() {
            var newY = Math.ceil(window.scrollY/100)*100;
            
            //reach end
            if(newY >= 500) {
              window.scrollTo(0, 0);
              newY = 0;
            }

            setYScrollPos(Math.ceil(window.scrollY/100)*100);
            
        }

        setStart(false);
        window.addEventListener('scroll', handleScroll, false);
        
        return () => {
            window.removeEventListener('scroll', handleScroll, false);
        };
    }, [yScrollPos]);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center>
        <HStack w='100vw' h='100vh'>
          <Welcome yScrollPos={yScrollPos}/>
          <RotatingIcons yScrollPos={yScrollPos}/>
        </HStack>
      </Center>
      
      <BottomScrollText yScrollPos={yScrollPos}/>
      
    </div>
  )
}
