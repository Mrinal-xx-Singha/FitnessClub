import React from 'react'

import { Box, Stack, Typography } from '@mui/material'

const ExerciseVideos = ({exerciseVideos, name}) => {
  console.log(exerciseVideos)

  if(!exerciseVideos.length) return 'Loading....';

  return (
    <Box sx={{marginTop: { lg:'203px',xs :'20px'}}} p='20px'>
      <Typography sx={{ fontSize:{lg: '44px',xs:'25px'}}} fontWeight={700} color='#000' mb='33px'>
      Watch <span style={{color:'#ff2625',textTransform:'capatalize'}}>{name}</span> exercise Videos 
      </Typography>
      <Stack sx={{flexDirection : {lg:'row'}, gap:{ lg:'110px',xs:'0'}
      }} justifyContent='flex-start' flexWrap='wrap' alignItems='center'>
        { exerciseVideos?.slice(0,6).map((item,index) => (

          <a
            key={index} className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'
          >
            <img style={{borderTopLeftRadius:'20px'}} src={item.video.thumbnails[0].url} alt ={item.video.title}/>
            <Box>
              <Typography sx={{ fontSize:{lg:'28px',xs:'18px'}}} color='#000' fontWeight={600}>
              {item.video.title}
              </Typography>
              <Typography fontSize='14px' color='#000'>
              {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos
