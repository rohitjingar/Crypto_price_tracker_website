import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
     <HStack p={"6"} shadow={"base"} bgColor={"blackAlpha.900"} >
        <Button p={"3"} variant={"unstyled"} color={"white"} >
           <Link to="/">Home</Link>
        </Button>
        <Button p={"3"} variant={"unstyled"} color={"white"} >
           <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button p={"3"} variant={"unstyled"} color={"white"} >
           <Link to="/coins">Coins</Link>
        </Button>
     </HStack>
  )
}

export default Header