import React from 'react';
import { StatisticCard, Wrapper } from '../../../Components';

// charts
import { Bar, Pie } from "react-chartjs-2";
import { usageChart, statusChart, canceledChart } from "../../../Data";




// material UI
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';


// Icons
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import PeopleIcon from '@material-ui/icons/People';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import DescriptionIcon from '@material-ui/icons/Description';


class Home extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      something: 0,
    }
  }

  render(){
    return(
      <Wrapper>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={3}>
            <StatisticCard
              type="fill"
              title="Users"
              value={50}
              icon={<PeopleIcon fontSize="large" />}
              color="#8d918b"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatisticCard
              type="fill"
              title="Projects"
              value={120}
              icon={<AccountTreeIcon fontSize="large" />}
              color="#82e368"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatisticCard
              type="fill"
              title="Nodes"
              value={320}
              icon={<TurnedInIcon fontSize="large" />}
              color="#ffd740"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatisticCard
              type="fill"
              title="Reports"
              value={120}
              icon={<DescriptionIcon fontSize="large" />}
              color="#f44336"
            />
          </Grid>
          <Grid item xs={12}>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Users Usage
                </Typography>
                <Bar
                  data={usageChart.data}
                  height={usageChart.height}
                  options={usageChart.options}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Projects Status
                </Typography>
                <Pie
                  data={statusChart.data}
                  height={statusChart.height}
                  options={statusChart.options}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Users Canceled
                </Typography>
                <Bar
                  data={canceledChart.data}
                  height={canceledChart.height}
                  options={canceledChart.options}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Wrapper>
    );
  }
}
export default Home;
