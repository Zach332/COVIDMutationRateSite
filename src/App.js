import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import spike from './spike.jpeg'
import highmedlow from './highmedlow.png'
import medcomb from './medcomb.png'
import strin from './strin.png'
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

function App() {
  return (
    <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        COVID Mutation Rate Analysis
                </Typography>
            </Toolbar>
        </AppBar>
        <Box sx={{display: 'flex',
              alignItems: 'center',
              flexDirection: 'column'}}>
        <Paper elevation={10} sx={{
              m: 4,
              width: '80%',
              textAlign: 'center'
              }}>
            <Typography variant="h6" component="div" >
                Motivation
            </Typography>
        </Paper>
        <Card variant="outlined" sx={{m: 2, width: '60%'}}>
            <CardContent>
                <Typography variant="body2">
                COVID-19 has caused nearly 1 million deaths in the United States alone [https://covid.cdc.gov/covid-data-tracker/#datatracker-home]. Understanding and modeling it can help inform public response and facilitate a better understanding of pandemics in general. The virus that causes COVID-19 mutates, and understanding the dynamics of these mutations over time—how prevalent mutations become, to what degree mutations persist, and how public health measures affect the reproduction of different types of mutations—provides one lens into the overall evolution of COVID-19 and the way in which public health measures can help.
                </Typography>
            </CardContent>
        </Card>
        <Card sx={{m: 2, width: '60%'}}>
            <CardMedia
                component="img"
                height="100%"
                width="100%"
                image={spike}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    On Mutations
                </Typography>
                <Typography variant="body2">
                The virus that causes COVID-19 is SARS-CoV-2. Countries around the world regularly sequence the SARS-CoV-2 genome from cases of COVID-19 to monitor for mutations, so as to better understand its evolution and especially to monitor for new variants that may lead to different symptoms or affect vaccine effectiveness. mRNA vaccines instruct cells to produce a spike protein resembling that of SARS-CoV-2, which enables the immune system to learn to fight off a real SARS-CoV-2 virus [https://www.cdc.gov/coronavirus/2019-ncov/vaccines/different-vaccines/mrna.html]. So mutations in the spike protein of SARS-CoV-2 in particular can change how effective vaccines are at preparing the immune system, and makes understanding SARS-CoV-2 mutation even more important.
                </Typography>
            </CardContent>
        </Card>
        <Card variant="outlined" sx={{m: 2, width: '60%'}}>
            <CardActions>   
                <Button onClick={() => {
                    window.open("https://nextstrain.org/ncov/gisaid/global/6m");
                }} size="small">Explore COVID-19 Mutations</Button>
            </CardActions>
        </Card>
        <Paper elevation={10} sx={{
              m: 4,
              width: '80%',
              textAlign: 'center'
              }}>
            <Typography variant="h6" component="div" >
                The Original Analysis
            </Typography>
        </Paper>
        <Card variant="outlined" sx={{m: 2, width: '60%'}}>
            <CardContent>
                <Typography variant="body2">
                Arevalo et al. used data from sequenced COVID-19 cases around the world to find mutations with at least 3% frequency (the genomic sequencing data was normalized by the number of cases in countries, so that countries that provide less sequencing data are not underrepresented). They found 115 mutations meeting this threshold, and found that the relative frequencies of these mutations over time fit into three categories: high, medium, and low frequency. High frequency is the most striking category: each such mutation increased in relative frequency without ever significantly decreasing. There are two clear times at which these mutations arose. Both the low and medium frequency mutations alternate between increasing and decreasing, but the low frequency mutations have never exceeded 15% relative frequency.
                </Typography>
            </CardContent>
        </Card>
        <Card sx={{m: 2, width: '350px'}}>
            <CardMedia
                component="img"
                height="100%"
                width="100%"
                image={highmedlow}
            />
        </Card>
        <Card sx={{m: 2, width: '60%'}}>
            <CardMedia
                component="img"
                height="100%"
                width="100%"
                image={medcomb}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Medium and Low Frequency Dynamics
            </Typography>
                <Typography variant="body2">
                    By looking at the region-specific frequencies of medium and low frequency mutations, Arevalo et al. found that the frequency patterns of the medium and low frequency mutations could be attributed in part to a high prevalence of these mutations only in specific regions, and in part to global competition between different beneficial mutations. A few example medium frequency mutations are displayed in the graphs: in one case the mutation is prevalent in just one region and nearly absent elsewhere, but in another the mutation has moderate frequency in each region. These two examples help to demonstrate the two explanations given by the authors, though these are extreme cases and the frequency patterns of many medium and low frequency mutations could be attributed to both causes.
                </Typography>
            </CardContent>
        </Card>
        <Card sx={{m: 2, width: '60%'}}>
            <CardMedia
                component="img"
                height="100%"
                width="100%"
                image={strin}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                High Frequency Dynamics and Public Health Measures
            </Typography>
                <Typography variant="body2">
                    The high frequency mutation frequency pattern is the most striking: the mutations increase rapidly in prevalence, and arise at two distinct points. Arevalo et al. hypothesized that non-pharmaceutical interventions (public health measures like masking mandates, social distancing requirements, and event cancellations) might play a part in these dynamics. By comparing the country-specific reproduction rate of high frequency mutations with a country’s “stringency index” (a measurement of the strictness of a country’s non-pharmaceutical COVID-19 response developed by The Oxford Coronavirus Government Response Tracker), Arevalo et al. could investigate whether these public health measures differently affected high frequency mutations. Ultimately, while Arevalo et al. found that these public health measures do decrease the reproduction of high frequency mutations, they also decrease the reproduction of other mutations. That is, these public health measures seem generally effective at reducing the spread of variants of COVID-19, but they do not seem to explain the specific frequency patterns of high frequency mutations.
                </Typography>
            </CardContent>
        </Card>
        </Box>
    </div>
  );
}

export default App;
