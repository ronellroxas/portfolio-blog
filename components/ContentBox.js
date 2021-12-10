import styles from '../styles/ContentBox.module.css'
import { Center, Container } from '@chakra-ui/react'

function ContentBox({ Component, props }) {
    /*
            Main Content Boxes for Homepage
    */
    return (    
        // <div className={styles.container}>
        //     {Component}
        // </div>
        <Container className={styles.container} m={0}>
            {Component}
        </Container>    
    )
}

export default ContentBox;