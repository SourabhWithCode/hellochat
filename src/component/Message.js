import { Avatar, HStack, Text } from '@chakra-ui/react'
import React from 'react'

const Message = ({text,uri,user="other"}) => {
  return (
    <HStack borderRadius={'base'} alignSelf={ user === 'me' ?'flex-end':'flex-start'} bg={'grey.100'} paddingY={'2'} paddingX={'4'}>
        {
            user === 'other' && <Avatar src={uri}/>
        }
      <Text bg={'grey.100'}>
        {text}
      </Text>
        {
            user === 'me' && <Avatar src={uri}/>
        }
    </HStack>
  )
}

export default Message
