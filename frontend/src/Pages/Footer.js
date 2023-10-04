import { VStack, useColorMode, Text } from '@chakra-ui/react'
import React from 'react'

function Footer() {
    const {colorMode} = useColorMode();
    const isDark = colorMode === "dark";

  return (
    <VStack>
        <Text color={isDark ? "cyan.600" : "black"} fontWeight="bold" fontFamily="Gabar"> 
        Copyright © 2023 Vivek Sharma. All rights reserved.
        </Text>
    </VStack>
  )
}

export default Footer
