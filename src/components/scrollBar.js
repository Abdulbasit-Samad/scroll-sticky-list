
import Box from "@mui/material/Box";
import WebContent from "./webCard";
import MobileCard from "./mobileCard";
import { useEffect, useState } from "react";

const ScrollBar = () => {

  const [ image, setImage ] = useState('');
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  

  useEffect(() => {
    const handleWindowResize = () => {
      setIsSmallScreen(window.innerWidth <= 1100); 
    };

    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  const data = [
    {
      title: 'Each month you get juno points',
      subtitle: 'Custom allowance for your employees',
      image : '/Icons/car.png'
    },
    {
      title: 'Each month you get juno points',
      subtitle: 'Custom allowance for your employees',
      image : '/Icons/dice.jpeg'
    },
    {
      title: 'Each month you get juno points',
      subtitle: 'Custom allowance for your employees',
      image: '/Icons/duck.jpeg'
    },
    {
      title: 'Each month you get juno points',
      subtitle: 'Custom allowance for your employees',
      image: '/Icons/flowers.jpeg'
    },
    {
        title: 'Each month you get juno points',
        subtitle: 'Custom allowance for your employees',
        image : '/Icons/bird.jpeg'
      },
      {
        title: 'Each month you get juno points',
        subtitle: 'Custom allowance for your employees',
        image : '/Icons/car.png'
      },
      {
        title: 'Each month you get juno points',
        subtitle: 'Custom allowance for your employees',
        image : '/Icons/duck.jpeg'
      },
      {
        title: 'Each month you get juno points',
        subtitle: 'Custom allowance for your employees',
        image : '/Icons/bird.jpeg'
      },
      {
        title: 'Each month you get juno points',
        subtitle: 'Custom allowance for your employees',
        image : '/Icons/dice.jpeg'
      },
  ];


 
  return (
   ! isSmallScreen ?
    <Box
      marginTop={4}
      sx={{
        flexGrow: 1,
        overflow: "hidden",
        px: 3,
        textAlign: "center",
        position: "relative",
        display: "flex",
      }}
    >
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        
      <Box
      paddingX={5}
      style={{
        width: "25%",
        top : '5%',
        backgroundColor: "#141414",
        position: "fixed", 
        paddingTop: "15%",
        transform:"translateY(-50%)",
        marginLeft : "1%",
        borderRadius : "15px",
      }}
    >
      <img src={image} alt="hello" width={'100%'} height={"100%"} />
    </Box>

        <div style={{marginRight : "200"}}>
        {data.map((item, index) => (
          <WebContent key={index} title={item.title} subtitle={item.subtitle} image={item.image} setImage={setImage}/>
        ))}
        </div>
      </Box> 
    </Box> : 

     <Box
      marginTop={4}
      sx={{
        flexGrow: 1,
        overflow: "hidden",
        px: 3,
        textAlign: "center",
        position: "relative",
        display: "flex",
      }}
    >
    
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
      {data.map((item, index) => (
          <MobileCard key={index} title={item.title} subtitle={item.subtitle} image={item.image} />
        ))}
        </Box>
      </Box>

  );
};

export default ScrollBar;
