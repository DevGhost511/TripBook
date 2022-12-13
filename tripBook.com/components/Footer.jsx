import React from 'react'
import { Box, Button, Flex, Grid, Input, Text } from "@chakra-ui/react"


const Footer = () => {
  return (
    <Box bg='#efefef'>
      {/* *****************************************************footer Section 1 start********************************************************** */}
    <Box bg='#00224f' w='100%' p="2rem" color='white'>
      <Box w='60%' m="auto" p={4} >
     <Text fontSize='3xl' lineHeight="33px" textAlign="center" color="white" fontWeight="300">Save time, save money!</Text>
     <Text fontSize='1xl' textAlign="center" mb="10px" color="gray.300">Sign up and we'll send the best deals to you</Text>
     <Grid templateColumns={{ sm:"repeat(1, 1fr)" ,lg:"repeat(2, 1fr)" }} m="auto" p={4} gap="10px" >
     <Input color="black" borderRadius="3px" ml={{ sm: "0px",lg:"10rem" }} variant='outline' bg="white" placeholder='Your email' />
     <Button borderRadius="3px" m={{sm:"auto" , md:"auto" }}  ml={{lg:"10rem" }} colorScheme='messenger'>Subscribe</Button>
     </Grid>
      </Box>
  </Box>
  {/* *****************************************************footer Section 1 end********************************************************** */}
    <Box bg='#003580' w='100%' color='white'>
    <Box  p="1rem" m="auto" w="10%" mb="0.5rem"><Button borderRadius="3px" colorScheme='none' m="auto" border="1px solid" fontSize="15px" fontWeight="300" >List your property</Button></Box>
      <Box w='100%' m="auto" p={2} borderTop="1px solid" >
        <Grid templateColumns={{ base: "repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)", lg: "repeat(5, 1fr)" }} cursor="pointer" fontWeight="600" w="80%" fontSize="14px" ml="4rem" >
          <Text>Mobile version</Text>
          <Text>Manage your bookings</Text>
          <Text>Customer service help</Text>
          <Text>Become an affiliate</Text>
          <Text>Booking.com for Business</Text>
        </Grid>
      </Box>
  </Box>
{/* *****************************************************footer Section 2 end********************************************************** */}
  <Box color="#0071c2" w='80%' m="auto" mt="15px">
<Grid fontSize="14px" templateColumns={{ base: "repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)", lg: "repeat(5, 1fr)" }} gap={6}>
<Box cursor="pointer" >
  <Text>Countries</Text>
  <Text>Regions</Text>
  <Text>Cities</Text>
  <Text>Districts</Text>
  <Text>Airports</Text>
  <Text>Hotels</Text>
  <Text>Places of interest</Text>
</Box>
<Box cursor="pointer">
  <Text>Homes</Text>
  <Text>Apartments</Text>
  <Text>Resorts</Text>
  <Text>Villas</Text>
  <Text>Hotels</Text>
  <Text>B&Bs</Text>
  <Text>Guest houses</Text>
</Box>
<Box cursor="pointer">
<Text>Unique places to stay</Text>
  <Text>All destinations</Text>
  <Text>Discover</Text>
  <Text>Reviews</Text>
  <Text>Unpacked: Travel articles</Text>
  <Text>ravel Communities</Text>
  <Text>Seasonal and holiday deals</Text>
</Box>
<Box cursor="pointer">
<Text>Car hire</Text>
  <Text>Flight finder</Text>
  <Text>Restaurant reservations</Text>
</Box>
<Box cursor="pointer">
<Text>Coronavirus (COVID-19) FAQs</Text>
  <Text>About Booking.com</Text>
  <Text>Customer Service help</Text>
  <Text>Partner help</Text>
  <Text>Careers</Text>
  <Text>Sustainability</Text>
  <Text>Safety resource centre</Text>
  <Text>Investor relations</Text>
  <Text>Terms & Conditions</Text>
  <Text>Partner dispute</Text>
  <Text>How we work</Text>
</Box>
</Grid>
  </Box>
{/* *****************************************************footer Section 3 end********************************************************** */}
    </Box>
  )
}

export default Footer
