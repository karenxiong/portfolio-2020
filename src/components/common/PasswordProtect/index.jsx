import React, { useContext } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import GirlDog from 'assets/illustrations/girl-dog.png';
import useLocalStorage from 'hooks/useLocalStorage';

const useStyles = makeStyles(() => ({
  root: {
    // marginTop: '4rem',
  },
  girl: {
    marginTop: '3.5rem',
    '& img': {
      maxWidth: '366px',
    },
  },
  textField: {
    width: '312px',
    margin: '1rem',
    '& label + div': {
      borderRadius: '10px',
    },

    '& label.Mui-focused': {
      color: 'rgb(193 130 214)',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'rgb(193 130 214)',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        // borderColor: 'red',
      },
      '&:hover fieldset': {
        // borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgb(193 130 214)',
      },
    },
  },
  button: {
    pointer: 'cursor',
    backgroundColor: 'rgba(230, 202, 239, 1)',
    borderRadius: '10px',
    width: '114px',
    height: '42px',
    color: 'rgba(0, 0, 0, 1)',
    border: 'none',

    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '1rem',
    lineHeight: '22px',

    letterSpacing: '0.1rem',
    textTransform: 'lowercase',
  },
}));

export const PasswordProtect = ({ children }) => {
  const classes = useStyles();

  const [values, setValues] = useLocalStorage('passwordProtect', {
    password: '',
    submitPassword: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  return children;

  return values.submitPassword !== 'Karenxiong2021' ? (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Grid className={classes.root} container direction="column" justifyContent="flex-start" alignItems="center">
          <Grid className={classes.girl} item xs={12}>
            <img src={GirlDog} alt="Girl with white doggie" />
          </Grid>
          <Grid container xs={12} justifyContent="center" alignItems="center">
            <FormControl className={classes.textField} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                // error={values.submitPassword && values.submitPassword !== 'Karenxiong2021'}
                defaultValue="Hello World"
                helperText="Incorrect password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                onKeyPress={event => {
                  if (event.key === 'Enter') {
                    setValues({ ...values, submitPassword: event.target.value });
                  }
                }}
                labelWidth={70}
              />
            </FormControl>
            <button
              type="submit"
              className={classes.button}
              onClick={() => setValues({ ...values, submitPassword: values.password })}
            >
              enter
            </button>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  ) : (
    <>{children}</>
  );
};
