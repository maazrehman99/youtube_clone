import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import {Videocard, Channelcard} from "./";


const Videos = ({ videos,direction }) => {
  console.log(videos);
  return (
    <Stack
      direction={direction ||"row"}
      flexWrap= "wrap"
      justifyContent={"start"}
      gap={2}
    >
   {videos.map((item,idx) => (
     <Box key={idx}>
     
      {item.id.videoId && <Videocard video={item} />}
      {/* {item.id.channelId && <Channelcard channeldetail={item} />} */}
     
     </Box>
   ))}

    </Stack>
  );
};

export default Videos;
