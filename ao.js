import React from 'react';
import { TextField, Button, FormControlLabel, Select, MenuItem, Switch } from '@mui/material';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#cccdcf', // Change background color to purple
  color: 'black',
  textTransform: 'none',
  boxShadow: 'none',
  border: '2px solid black',
  borderRadius: '20px', // Increase border-radius for more rounded corners
  padding: theme.spacing(1, 2),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&:hover': {
    backgroundColor: '#A5A6F6', // Change hover background color to purple
    color: '#282bfa',
    boxShadow: 'none',
    border: '3px solid #282bfa',
  },
  '&:active': {
    backgroundColor: '#A5A6F6', // Change background color when button is clicked
    color: 'white',
    boxShadow: 'none',
    border: '2px solid #A5A6F6',
  },
  width: '100%',
}));

const IconLockContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0.5),
  marginRight: theme.spacing(1),
  borderRight: `1px solid ${theme.palette.divider}`,
}));

const LabelContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(0.5),
}));


const RegistrationForm = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted!');
  };
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* General Information */}
        <div className="text-center mb-1">
        <h2 className="text-xl font-bold font-Inter" style={{ color: '#4C4E6499', fontSize:'24px', fontWeight:'500', lineHeight:'21px', letterSpacing:'0.15px', align:'center' }}>General Information</h2>

          <p style={{ color: '#4C4E6499', fontSize:'14px', fontWeight:'400', lineHeight:'32.02px', letterSpacing:'0.15px', align:'center' }}>Add personal and official details below</p>
        </div>
        {/* Step 1 */}
        <div className="flex items-left justify-between mb-2">
          <h5 style={{ fontFamily:'Inter', color: '#4C4E6499', fontSize:'24px', fontWeight:'500', lineHeight:'21px', letterSpacing:'0.15px', align:'center' }}>Step 1: </h5>
        </div>
        {/* Categories */}
        <div className="flex items-center justify-between">
        <p style={{ fontFamily: 'Inter', color: '#666CFF', paddingLeft: '20px',fontSize:'16px', fontWeight:'400', lineHeight:'24px', letterSpacing:'0.15px', align:'center' }}>&nbsp; Please select any one or both of the following categories to proceed further</p>
        </div>

        <div className="flex items gap-3 mt-0">
          {/* Add Button Here */}
          <div className="flex items-center justify-between my-10">
          <CustomButton variant="outlined">
            <IconLockContainer>
              <PersonOutlineOutlinedIcon />
            </IconLockContainer>
            <LabelContainer>
              <Typography variant="body2" style={{fontFamily:'Inter'}}>Personal Information</Typography>
              <Typography variant="caption"style={{fontFamily:'Inter'}}>Your personal details will be classified.</Typography>
            </LabelContainer>
          </CustomButton>
        </div>
        <div className="flex items-center justify-between my-10">
          <CustomButton variant="outlined">
            <IconLockContainer>
              <WorkOutlineOutlinedIcon />
            </IconLockContainer>
            <LabelContainer>
              <Typography variant="body2"style={{fontFamily:'Inter'}}>Organizational Information</Typography>
              <Typography variant="caption"style={{fontFamily:'Inter'}}>Your personal details will be classified.</Typography>
            </LabelContainer>
          </CustomButton>
        </div>
        </div>

        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          {/* First Name and Last Name */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-0 md:mb-0">
              <div className="flex gap-10">
                <div className="w-full pr-2">
                  <label style={{ fontWeight: 'bold', fontFamily: 'Inter' }}>First Name</label>
                  <TextField
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    className="mb-3"
                    style={{width: '270.32px', fontFamily: 'Inter'}}
                    
                  />
                </div>
                <div className="w-full pl-3 ">
                  <label style={{ fontWeight: 'bold', fontFamily: 'Inter' }}>Last Name</label>
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    className="mb-3"
                    style={{width: '270.32px', fontFamily: 'Inter'}}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Email */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label style={{ fontWeight: 'bold', fontFamily: 'Inter' }}>Email</label>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                className="mb-3"
                style={{width: '600.32px', fontFamily: 'Inter'}}
              />
            </div>
          </div>
          
          {/* Other form fields */}
          {/* City */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label style={{ fontWeight: 'bold', fontFamily: 'Inter' }}>City</label>
              <Select
                label="City"
                variant="outlined"
                fullWidth
                className="mb-3"
                style={{width: '600.32px', fontFamily: 'Inter'}}
              >
                <MenuItem value="city1">City 1</MenuItem>
                <MenuItem value="city2">City 2</MenuItem>
                <MenuItem value="city3">City 3</MenuItem>
                {/* Add more cities as needed */}
              </Select>
            </div>
          </div>

          {/* Area/Town */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label style={{ fontWeight: 'bold', fontFamily: 'Inter' }}>Area/Town</label>
              <TextField
                label="Area/Town"
                variant="outlined"
                fullWidth
                className="mb-3"
                style={{width: '600.32px', fontFamily: 'Inter'}}
              />
            </div>
          </div>
          {/* Street Address */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label style={{ fontWeight: 'bold' ,fontFamily: 'Inter'}}>Street Address</label>
              <TextField
                label="Street Address"
                variant="outlined"
                fullWidth
                className="mb-3"
                style={{width: '600.32px' , fontFamily: 'Inter' }}
              />
            </div>
          </div>
          {/* Phone No. */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label style={{ fontWeight: 'bold',fontFamily: 'Inter' }}>Phone No.</label>
              <TextField
                label="Phone No."
                type="phone"
                variant="outlined"
                fullWidth
                className="mb-3"
                style={{width: '600.32px', fontFamily: 'Inter'}}
              />
            </div>
          </div>
          {/* State and Postal Code */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-0 md:mb-0">
              <div className="flex gap-10">
                <div className="w-full pr-2">
                  <label style={{ fontWeight: 'bold', fontFamily: 'Inter' }}>State</label>
                  <TextField
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    className="mb-3"
                    style={{width: '270.32px', fontFamily: 'Inter'}}
                    
                  />
                </div>
                <div className="w-full pl-2 ">
                  <label style={{ fontWeight: 'bold',fontFamily: 'Inter' }}>Postal Code</label>
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    className="mb-3"
                    style={{width: '270.32px', fontFamily: 'Inter'}}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Save Information Checkbox */}
          <FormControlLabel
            control={<Switch defaultChecked style={{color:'#666CFF'}}/>} 
            label="Save this information for future"
            style={{color: '#4C4E6499'}}
            className="mb-4"
          />
          {/* Submit Button */}
          <div className="flex justify-center w-full gap-3 ">
            <Button variant="contained" color="primary" type="submit" style={{color:"white", background:"#666CFF", borderRadius: '10px', fontFamily: 'Inter' }}>
              Next
            </Button>
            <Button variant="outlined"  type="submit" style={{color:"#4C4E6499", borderRadius: '10px', fontFamily: 'Inter' }}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
