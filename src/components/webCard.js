import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


const WebContent = (props) => {

  const { title, subtitle, image, setImage } = props;
const {ref : myRef , inView: myElementisVisible} = useInView({
  threshold: 0.99, 
  triggerOnce: false,
});

useEffect(() => {
  setImage(image);
}, [myElementisVisible]);


  return (
    <Box
    ref={myRef}
      sx={{
        my: 1,
        mx: "auto",
        p: 2,
      }}
    >
    
      <Grid
       
        container
        wrap="nowrap"
        spacing={2}
        alignItems="center"
        justifyContent="center"
        direction="column"
        marginTop={10}
       
      >
        <Grid item xs >
          <Typography
           
            variant="h4"
            style={{ color: `rgba(255, 255, 255,${myElementisVisible ? 15 : 0.1})` }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography
          
            variant="h6"
            style={{ color: `rgba(128, 128, 128,${myElementisVisible ? 15 : 0.1})` }}
          >
            {subtitle}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WebContent;
