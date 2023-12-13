import styles from './custom_container.module.scss'
const { Container } = require("react-bootstrap")

const CustomContainer = (props)=>{
const {children,className} = props

return <Container className={`${styles.custom_container} ${className}`}>
    {children}
</Container>
}

export default CustomContainer