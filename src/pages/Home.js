import React,{useState} from 'react'
import { Box } from '@mui/material'

import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'
import SeachExercises from '../components/SeachExercises'


const Home = () => {
  const [exercises,setExercises]  = useState([]);
  const [bodyPart,setBodyPart]  = useState('all');
  return (
    <Box>
      <HeroBanner />
      < SeachExercises setExercises={setExercises}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}/>
      <Exercises
      setExercises={setExercises}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
       />
    </Box>
    
  )
}

export default Home
