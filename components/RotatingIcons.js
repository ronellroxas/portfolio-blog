import { Center, Icon, Text  } from '@chakra-ui/react'
import { motion} from 'framer-motion'
import IconButton from './IconButton'
import { useState, useEffect } from 'react'

const MotionCenter = motion(Center)

function RotatingIcons(props) {
    /*
        Welcome content for first ContentBox
    */
    const [activeNode, setActiveNode] = useState(0);

    useEffect(() => {
        if(props.yScrollPos/100 != activeNode) {
            setActiveNode(0)
        }
    }, 
    [props.yScrollPos]);

    //Animations
    const container = {
        hidden: { 
            opacity: 0,
            rotate: 0,
            width: '100vw'
        },
        show: {
            opacity: props.yScrollPos == 0 ? 0.5: 1,
            width: props.yScrollPos == 0 ? '100vw': '50vw',
            rotate: props.yScrollPos/100*90-90,

            transition: {
                type: 'spring',
                ease: 'easeOut',
                duration: 1
            }
        }
    }

    const iconVariant = {
        initial: {

        },
        animate: {

        }
    }

    const texts = ['WEBDEV', 'APPDEV', 'ABOUT ME', 'OTHERS'];

    return (
        <MotionCenter
                pos='fixed'
                h='100vh'
                right='0'

                variants={container}
                initial='hidden'
                animate='show'
        >
            {
                texts.map((value, i) => {
                    return <IconButton key={i} {...props} order={i+1} textContent={value} activeNode={activeNode} setActiveNode={setActiveNode}/>
                })
            }
            {/* <IconButton {...props} order={1} textContent={"WEBDEV"} activeNode={activeNode} setActiveNode={setActiveNode}/>
            <IconButton {...props}  order={2} textContent={"APPDEV"} activeNode={activeNode} setActiveNode={setActiveNode}/>
            <IconButton {...props}  order={3} textContent={"ABOUT ME"} activeNode={activeNode} setActiveNode={setActiveNode}/>
            <IconButton {...props}  order={4} textContent={"OTHERS"} activeNode={activeNode} setActiveNode={setActiveNode}/> */}
        </MotionCenter>
    )
}

export default RotatingIcons;