import {Flex, Input, Button, InputGroup, FormControl, InputLeftElement} from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'

const Search = ({searchName, changeSearch, submitSearch}) => {
    return (
        <form onSubmit={submitSearch}>
            <FormControl >
                <Flex margin='2em auto'>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none' children={<SearchIcon />}/>
                        <Input value={searchName} placeholder='Summoner Name' onChange={changeSearch} backgroundColor='white'/>
                    </InputGroup>
                    <Button type='submit' colorScheme='blue'>Search</Button>
                </Flex>
            </FormControl>
        </form>
    )
}

export default Search

/*
<Flex width='25%' margin='2em auto'>
 */