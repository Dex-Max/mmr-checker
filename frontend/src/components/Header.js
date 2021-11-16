import { Flex } from '@chakra-ui/react'
import Search from "./Search";

const Header = () => {
    return (
        <Flex direction='row' width='100%' height='8em' align='center' backgroundColor='#e8e8e8'>
            <Search />
        </Flex>
    )
}

export default Header