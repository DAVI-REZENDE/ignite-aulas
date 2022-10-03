import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Davi Rezende</Text>
          <Text
            color="gray.300"
            fontSize="small"
          >
              daviresendes12@gmail.com
            </Text>
        </Box>
      )}

      <Avatar size="md" name="Davi Rezende" src="https://www.github.com/DAVI-REZENDE.png" />
    </Flex>
  )
}