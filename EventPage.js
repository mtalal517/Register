import React, { Fragment } from 'react';
import { Container, TextField, Typography, Button, Box, Grid, Paper,Link } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/system';
import logo from './moqah.svg';
import tree from './tree.svg';
import wave from './Group.svg';



// NO.1
const Header1 = styled(Paper)(({ theme }) => ({
  width: '1519px',
  height: '150px',
  background:'#9798C5',
  display: 'inline',
  position: 'absolute',
  padding: theme.spacing(4, 0),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 0),
  },
}));

// NO.2
const Header2 = styled(Paper)(({ theme }) => ({
  background: '#E2E0FF',
  textAlign: 'center',
  width: '1519px',
  height: '535px',
  top: '150px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  flexShrink: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 0),
  },
}));
const SVGContainer = styled('div')({
  position: 'absolute',
  left: '50px',
  top: '50%',
  transform: 'translateY(-50%)',
});
const HeaderContent = styled('div')({
  textAlign: 'center',
});
const GradientText = styled('span')(({ gradient, paddingLeft }) => ({
  backgroundImage: gradient,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '90px',
  lineHeight: '36px',
  display: 'block',
  paddingBottom: '70px',
  paddingTop: '50px',
  paddingLeft: paddingLeft,
}));

const Header3 = styled(Paper)(({ theme }) => ({
  background: '#F8F8FA',
  display: 'flex',
  width: '1519px',
  height: '200px',
  justifyContent: 'center', 
  flexShrink: '0',
  position: 'absolute',
  flexDirection: 'column',
  top: '685px',
  padding: theme.spacing(4, 0),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 0),
  },
}));
const GradientText1 = styled('span')(({ gradient, paddingLeft }) => ({
  backgroundImage: gradient,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '72.4px',
  lineHeight: '84px',
  display: 'block',
  gap: '0px',
  paddingLeft: paddingLeft,
  flexShrink: '0',
}));

const Header4 = styled(Paper)(({ theme }) => ({
  background: '#F8F8FA',
  display: 'flex',
  width: '1519px',
  height: '130px',
  flexDirection: 'column',
  justifyContent: 'center', 
  flexShrink: '0',
  position: 'absolute',
  top: '885px',
  padding: theme.spacing(4, 0),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 0),
  },
}));
const SVGContainer1 = styled('div')({
  position:'absolute',
  left: '50px',
  top: '40px',
  transform: 'translateY(-50%)',
});


const Header5 = styled(Paper)(({ theme }) => ({
  background: '#F8F8FA',
  width: '1519px',
  height: '2094px',
  justifyContent: 'center', 
  flexShrink: '0',
  position: 'absolute',
  flexDirection: 'column',
  top: '1015px',
  padding: theme.spacing(4, 0),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 0),
  },
}));
const SubmitButton = styled(Button)(({ theme }) => ({
  background: '#666CFF',
  color: 'white',
  display: 'flex',
  width: '863px',
  justifycontent: 'center',
  alignitems: 'center',
  gap: '10px',
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
  },
}));

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            height: '173px', // Adjust the height here
          },
        },
        input: {
          height: '100px', // Adjust the inner input height here
          padding: '0 14px',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          top: '-10px',
          left: '-14px',
        },
      },
    },
  },
});

const Wave = styled('img')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(4),
}));

const EventPage = () => {
  return (
    <Fragment>
      <Header1 elevation={3} style={{ display: 'flex', justifyContent: 'space-between' }}> 
      <img src={logo} alt="Company Logo" style={{paddingLeft:'200px',width: '535px', height: '73px',top: '200px',left: '146px',gap: '0px',opacity: '0px'}}/>
      <div style={{ display: 'flex', alignItems: 'center'}}> 
        <Link href="/cities" underline="none" component="button" style={{ marginRight: 50 }}>
          <Typography variant="h3" component="h1">
          <span
              style={{
                color:'white',
                fontFamily: 'Inter',
                fontWeight: '500',
                fontSize: '16px',
                lineHeight: '24px',
               }}>
            Cities
            </span>
          </Typography>
        </Link>
        <Link href="/trending" underline="none" component="button" style={{ marginRight: 50 }}>
          <Typography variant="h3" component="h1">
            <span
              style={{
              color:'white',
              fontFamily: 'Inter',
              fontWeight: '500',
              fontSize: '16px',
              lineHeight: '24px',
               
               }}>
            Trending
            </span>
          </Typography>
        </Link>
        <Link href="/categories" underline="none" component="button" style={{ marginRight: 50 }}>
          <Typography variant="h3" component="h1">
          <span
              style={{
                color:'white',
                fontFamily: 'Inter',
                fontWeight: '500',
                fontSize: '16px',
                lineHeight: '24px',
               }}>
            Categories
            </span>
          </Typography>
        </Link>
      </div>
    </Header1>
    <Header2 elevation={3}>
    <SVGContainer>
      <img src={tree} alt="Tree" />
    </SVGContainer>
    <HeaderContent>
      <Typography className="responsive-typography">
        <GradientText gradient='linear-gradient(180deg, #000 10%, rgba(0, 0, 0, 0.00) 100%)' paddingLeft='420px'>
          Register
        </GradientText>
      </Typography>
      <Typography className="responsive-typography">
        <GradientText gradient='linear-gradient(180deg, #FF002E 10%, rgba(255, 0, 46, 0.00) 100%)' paddingLeft='750px'>
          Your
        </GradientText>
      </Typography>
      <Typography className="responsive-typography">
        <GradientText gradient='linear-gradient(180deg, #761CBC 10%, rgba(118, 28, 188, 0.00) 100%)' paddingLeft='924px'>
          Event
        </GradientText>
      </Typography>
    </HeaderContent>
    </Header2>

    <Header3 elevation={3}>
      <Typography className='responsive-typography'>
      <GradientText1 gradient='linear-gradient(94deg, #666CFF 0%, #9BD0F5 100%)' paddingLeft='300px'>
          Your Dream,
        </GradientText1>
      </Typography>
      <Typography className='responsive-typography'>
      <GradientText1 gradient='linear-gradient(94deg, #666CFF 0%, #9BD0F5 100%)' paddingLeft='712px'>
          reimagined.
        </GradientText1>
      </Typography>
    </Header3>

    <Header4 elevation={3}>
    <SVGContainer1>
      <img src={wave} alt="Wave" />
    </SVGContainer1>
    </Header4> 

    <Header5 elevation={3}>
    <Typography style={{color:'#000', textAlign:'center', fontFamily:'Poppins', fontSize:'36px', fontStyle:'normal', fontWeight:'700', lineHeight:'normal'}}>
        Registration
      </Typography>
      <Typography style={{marginLeft:'320px', marginTop:'50px',color:'#000', fontFamily:'Poppins', fontSize:'12px', fontStyle:'normal', fontWeight:400,lineHeight:'normal'}}>
        Your Name
      </Typography>
      <TextField  style={{width:'817px', height:'50px', marginLeft:'320px', marginTop:'10px', background:'white'}} id="outlined-basic" label="Enter Your Name" variant="outlined" />
      <Typography style={{marginLeft:'320px', marginTop:'50px',color:'#000', fontFamily:'Poppins', fontSize:'12px', fontStyle:'normal', fontWeight:400,lineHeight:'normal'}}>
        Your Email
      </Typography>
      <TextField  style={{width:'817px', height:'50px', marginLeft:'320px', marginTop:'10px', background:'white'}} id="outlined-basic" label="Enter your Email" variant="outlined" />
    
      <Typography style={{color:'#000', textAlign:'center', fontFamily:'Poppins', fontSize:'36px', fontStyle:'normal', fontWeight:'700', lineHeight:'normal', marginTop:'60px'}}>
        Contact Information
      </Typography>
      <Typography style={{marginLeft:'300px', marginTop:'50px',color:'#000', fontFamily:'Poppins', fontSize:'12px', fontStyle:'normal', fontWeight:400,lineHeight:'normal'}}>
        Organization Name
      </Typography>
      <TextField  style={{width:'866px', height:'50px', marginLeft:'300px', marginTop:'10px', background:'white'}} id="outlined-basic" label="Enter Organization Name" variant="outlined" />
      <Typography style={{marginLeft:'300px', marginTop:'50px',color:'#000', fontFamily:'Poppins', fontSize:'12px', fontStyle:'normal', fontWeight:400,lineHeight:'normal'}}>
        Primary Phone Number
      </Typography>
      <TextField  style={{width:'866px', height:'50px', marginLeft:'300px', marginTop:'10px', background:'white'}} id="outlined-basic" label="Enter Contact Number" variant="outlined" />

      <Grid container spacing={2}>
        <Grid item xs={7} sm={3.4}>
          <TextField fullWidth label="Event Facebook" variant="outlined" margin="normal" style={{height:'50px', marginLeft:'300px', marginTop:'50px', background:'white'}}  />
        </Grid>
        <Grid item xs={7} sm={3.4} alignItems={'center'}>
          <TextField fullWidth label="Event Instagram" variant="outlined" margin="normal" style={{height:'50px', marginLeft:'300px', marginTop:'50px', background:'white'}}  />
        </Grid>
      </Grid>


      <Typography style={{color:'#000', textAlign:'center', fontFamily:'Poppins', fontSize:'36px', fontStyle:'normal', fontWeight:'700', lineHeight:'normal', marginTop:'60px'}}>
        Event Information
      </Typography>
      <Typography style={{marginLeft:'300px', marginTop:'50px',color:'#000', fontFamily:'Poppins', fontSize:'12px', fontStyle:'normal', fontWeight:400,lineHeight:'normal'}}>
        Organization Name
      </Typography>
      <TextField  style={{width:'866px', height:'50px', marginLeft:'300px', marginTop:'10px', background:'white'}} id="outlined-basic" label="Enter Organization Name" variant="outlined" />
      <Typography style={{marginLeft:'300px', marginTop:'50px',color:'#000', fontFamily:'Poppins', fontSize:'12px', fontStyle:'normal', fontWeight:400,lineHeight:'normal'}}>
        Primary Phone Number
      </Typography>
      <TextField  style={{width:'866px', height:'50px', marginLeft:'300px', marginTop:'10px', background:'white'}} id="outlined-basic" label="Enter Contact Number" variant="outlined" />

      <Grid container spacing={2}>
        <Grid item xs={7} sm={3.4}>
          <TextField fullWidth label="Event Facebook" variant="outlined" margin="normal" style={{height:'50px', marginLeft:'300px', marginTop:'50px', background:'white'}}  />
        </Grid>
        <Grid item xs={7} sm={3.4} alignItems={'center'}>
          <TextField fullWidth label="Event Instagram" variant="outlined" margin="normal" style={{height:'50px', marginLeft:'300px', marginTop:'50px', background:'white'}}  />
        </Grid>
      </Grid>
        <Grid container spacing={2}>
        <Grid item xs={7} sm={3.4}>
          <TextField fullWidth label="Event Facebook" variant="outlined" margin="normal" style={{height:'50px', marginLeft:'300px', marginTop:'50px', background:'white'}}  />
        </Grid>
        <Grid item xs={7} sm={3.4} alignItems={'center'}>
          <TextField fullWidth label="Event Instagram" variant="outlined" margin="normal" style={{height:'50px', marginLeft:'300px', marginTop:'50px', background:'white'}}  />
        </Grid>
      </Grid>

      <Typography style={{color:'#000', textAlign:'center', fontFamily:'Poppins', fontSize:'36px', fontStyle:'normal', fontWeight:'700', lineHeight:'normal', marginTop:'60px'}}>
        Event Description
      </Typography>
      <ThemeProvider theme={theme}>
      <TextField
        style={{
          width: '866px',
          height: '173px',
          marginLeft: '300px',
          marginTop: '50px',
          background: 'white'
        }}
        id="outlined-basic"
        label="Enter Contact Number"
        variant="outlined"
        InputProps={{
          style: {
            height: '173px', // To adjust the input field height
          }
        }}
        InputLabelProps={{
          style: {
            left: '3px'
          }
        }}
      />
    </ThemeProvider>

      <Box display="flex" justifyContent="center">
        <SubmitButton variant="contained">
          Submit your Information
        </SubmitButton>
      </Box>
    
    
    
    
    

    </Header5>
    


    </Fragment>

  );
};
export default EventPage;