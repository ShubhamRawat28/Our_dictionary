import { Box, Card, CardContent, Typography, CardActions, Button } from '@mui/material'
import React from 'react'

const Phonetics = (props) => {
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography>Meanings</Typography>
          <Typography>{props.data[0].audio}</Typography>
          <Typography>{props.data[0].text}</Typography>
          <Typography>{props.data[1].audio}</Typography>
          <Typography>{props.data[1].text}</Typography>
          <Typography>{props.data[2].audio}</Typography>
          <Typography>{props.data[2].text}</Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Phonetics;
