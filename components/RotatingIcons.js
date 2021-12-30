import { Center, Icon, Text  } from '@chakra-ui/react'
import { motion} from 'framer-motion'
import IconButton from './IconButton'
import { useState, useEffect } from 'react'
import MenuItems from '../static/menuItems'

const MotionCenter = motion(Center)

function RotatingIcons(props) {
    /*
        Welcome content for first ContentBox
    */

    useEffect(() => {
        if(props.yScrollPos/100 != props.activeNode) {
            props.setActiveNode(0)
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
            width: props.yScrollPos == 0 || props.activeNode != 0 ? '100vw': '50vw',
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

    const texts = MenuItems.slice(1);
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
                    return <IconButton key={i} {...props} order={i+1} textContent={value} activeNode={props.activeNode} setActiveNode={props.setActiveNode}/>
                })
            }
        </MotionCenter>
    )
}

export default RotatingIcons;