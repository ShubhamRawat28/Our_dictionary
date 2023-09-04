import { Box, Card, CardContent, Typography} from '@mui/material'
import React from 'react'

const Meaning = (props) => {
  console.log(props.data);
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography>Meanings</Typography>
          <Typography>{props.data[0].definitions[0].definition}</Typography>
          <Typography>{props.data[1].definitions[0].definition}</Typography>
          <Typography>{props.data[2].definitions[0].definition}</Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Meaning
