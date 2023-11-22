
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const MobileCard = (props) => {
    const {title, subtitle, image} = props
    return(
       <Box
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
       marginTop={15}
      
     >
       <Grid item xs >
         <Typography
          
           variant="h4"
           style={{ color: `rgba(255, 255, 255)` }}
         >
           {title}
         </Typography>
       </Grid>
       <Grid item xs>
         <Typography
         
           variant="h6"
           style={{ color: `rgba(128, 128, 128)` }}
         >
           {subtitle}
         </Typography>
       </Grid>
          <Box
      component="img"
      sx={{
        marginTop : 4,
        height: 233,
        width: 350,
        maxHeight: { xs: 233, md: 167 },
        maxWidth: { xs: 200, md: 250 },
        backgroundColor : "#141414",
        borderRadius : "12px"
      }}
      alt="noimage"
      src={image}
/>
     
     </Grid>
       </Box>
    );
}

export default MobileCard;