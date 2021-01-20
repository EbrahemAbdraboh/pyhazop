import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ReactCodesInput from 'react-codes-input';
import Typography from '@material-ui/core/Typography';
import 'react-codes-input/lib/react-codes-input.min.css';
import classNames from "classnames";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  card: {
    overflow: "visible",

  },
  customCard: {
    background: "none",
    boxShadow: "none",
    [theme.breakpoints.down('xs')]: {
      background: "rgba(255,255,255,0.6)"
    },
  },
  session: {
    position: "relative",
    zIndex: 4000,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  background: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/static/images/Login.png)`,

  },
  content: {
    padding: `40px`,
    display: "flex",
    alignItems: "right",
    justifyContent: "center",
    flex: "1 0 auto",
    flexDirection: "column",
    minHeight: "100%",
    textAlign: "center"

  },
  wrapper: {
    width: "100%",
    margin: "0 auto"
  },
  root: {
    flexGrow: 1,
  },
  fullWidth: {
    width: "100%"
  },
  logo: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    margin: 'auto 0',
    height: '75px',

  },

  logowidth: {
    width: "100%",
    margin: '0 auto',
    padding: '40px 0 20',
  },
  inputHights:{
    height: '150px',
  },
  actionHeights:{
    height: '120px',
  },
  loginButton: {
    margin: '40px 0 0',
    color: "rgb(0, 119, 134)",
    [theme.breakpoints.down('xs')]: {
      backgroundColor: '#00abc0',
      color: '#fafafa',

    },

  },
  linkButton:{
    color: 'secondary',
    [theme.breakpoints.down('xs')]: {
      color: '#00abc0',

    },
  },
  msgText:{
    color: 'secondary',
    margin: '20px 0 0',
    [theme.breakpoints.down('xs')]: {
      color: '#222',

    },
  },
  textField:{
    color: 'secondary',
    [theme.breakpoints.down('xs')]: {
      '& label.Mui-focused': {
        color: '#00abc0',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#00abc0',
      },

    },
  },

}));


const PassCode = props => {
    const classes = useStyles();
    return(
      <div className={classNames(classes.session, classes.background, `bg-cover`)}>
        <div className={classes.content}>
          <div className={classes.wrapper}>
            <div className={classes.root}>
              <Grid container direction="row-reverse"  justify="flex-start" alignItems="center">
                <Grid item sm={1}>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Card className={classes.customCard}>
                    <CardContent>
                      <form>
                        <div
                          className={classNames(classes.logo, `text-xs-center pb-xs`)}
                        >
                          <img
                            src={`${process.env.PUBLIC_URL}/static/images/logo.png`}
                            alt=""
                            className={classNames(classes.logowidth, `block`)}
                          />
                          <Typography variant="subtitle1" gutterBottom color="secondary" className={classes.msgText}>
                          Check your E-mail and fill the inputs
                          </Typography>

                        </div>
                        <div className={classes.inputHights}>
                          <TextField
                            id="Email"
                            label="Email"
                            className={classes.textField}
                            fullWidth
                            margin="normal"
                            color="secondary"

                          />
                          <ReactCodesInput
                            initialFocus={false}
                            id="pin"
                            codeLength={4}
                            type="number" // ['alphanumeric', 'alpha', 'number']
                            hide={false}
                            placeholder=""
                            value=''
                            customStyleComponent={{

                              margin: "20px 0",
                            }}
                            customStyleWrapper={{
                              border: "none",
                              display: 'flex',
                              justifyContent:"space-between",

                            }}

                            customStyleCodeWrapper={{
                              overflowX: "visible",
                              overflowY: "visible",
                              display: 'flex',
                              justifyContent:"space-between",
                              padding: '5px',


                            }}
                            customStyleCode={{
                              borderRadius: '4px',
                              width: '100%',
                              backgroundColor: '#fafafa',
                              boxShadow :'1px 1px 3px #333',
                            }}

                            customStyleEnteredValue={{
                              color: "#00abc0",
                              fontWeight: "bold",
                              fontSize: '20px',

                            }}
                            customStyleCodeWrapperFocus={{
                              border: "none",

                            }}

                          />
                        </div>
                        <div className={classes.actionHeights}>

                          <Link to="/ResetPassword">
                            <Button
                              variant="contained"
                              fullWidth
                              type="submit"
                              className={classes.loginButton}
                              color="secondary"

                              >
                              Verify
                            </Button>
                          </Link>

                          <div className="pt-1 text-md-center">
                            <Link to="/PassCode">
                              <Button color="secondary" className={classes.linkButton}>Resend</Button>
                            </Link>

                          </div>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </div>

          </div>
        </div>
      </div>
    );

}
export default PassCode;
