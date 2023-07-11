import React from 'react'
import {Box, Stack , Typography} from '@mui/material';

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px' sx={{backgroundColor:'#777799'}}>
        <Typography variant='h5' pd='40px' mt='20px' mb='20px'>
          Made With 🤍 By Mrinal Singha
          <br />ig_mrinalsingha
        </Typography>
      </Stack>
    </Box>
  
  )
}

export default Footer
