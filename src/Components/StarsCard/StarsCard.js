import { ThemeProvider, createTheme } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import OpenModal from '../OpenModal/OpenModal';

import './StarsCard.css';

const theme = createTheme({
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
});

const formatDate = dateString => {
  const date = new Date(dateString);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const fullDate = date.toLocaleDateString('en-US', options);

  return fullDate;
};

const StarsCard = ({ cardData, formData }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        {formData === 'films' ? (
          <Card
            sx={{
              minWidth: {
                xs: 50,
                sm: 100,
                md: 500,
              },
              minHeight: {
                xs: 200,
                md: 300,
              },
              padding: {
                xs: 0,
                md: 2,
              },

              background: 'transparent',
              border: '2px solid #CD853F',
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  fontSize: 24,
                  textDecoration: 'underline',
                  fontWeight: 'bold',
                }}
                color='	white'
                gutterBottom
              >
                {cardData.title}
              </Typography>

              <Typography sx={{ mb: 1.5, fontSize: 18 }} color='white'>
                <span>Episode: </span>

                {cardData['episode_id']}
              </Typography>

              <Typography
                sx={{ mt: 1.5, width: '250px', fontSize: 17 }}
                color='white'
              >
                <span>Directed by </span>
                {cardData.director}
                <br />
                <br />
                <span>Produced by </span>
                {cardData.producer}
                <br />
                <br />
                <span className='date'>
                  {formatDate(cardData['release_date'])}
                </span>
              </Typography>
            </CardContent>
            <CardActions>
              <OpenModal opening={cardData['opening_crawl']} />
            </CardActions>
          </Card>
        ) : (
          <Card
            sx={{
              minWidth: {
                xs: 50,
                sm: 100,
                md: 500,
              },
              minHeight: {
                xs: 200,
                md: 300,
              },
              padding: {
                xs: 0,
                md: 2,
              },
              background: 'transparent',
              border: '2px solid #CD853F',
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  fontSize: {
                    xs: 20,
                    sm: 24,
                    md: 30,
                  },
                  fontWeight: 'bolder',
                  textDecoration: 'underline',
                }}
                color='white'
                gutterBottom
              >
                {cardData.name}
              </Typography>

              <Typography
                sx={{
                  mb: 1.5,
                  width: '250px',
                  fontSize: {
                    xs: 15,
                    md: 18,
                  },
                }}
                color='white'
              >
                <span>Model:</span> {cardData.model}
                <br />
                <br />
                <span>Manufacturer: </span>
                {cardData.manufacturer}
                <br />
                <br />
                <span>Length: </span>
                {cardData.length}m
                <br />
                <span>Cargo Cap: </span>
                {cardData['cargo_capacity']} ltr
              </Typography>
              <div className='vehicleDetail'>
                <div className='subTitle'>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: 18,
                        md: 24,
                      },
                      fontWeight: 'bolder',
                      textDecoration: 'underline',
                    }}
                    color='#cd853f'
                    gutterBottom
                  >
                    Crew
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5, fontSize: 18, textAlign: 'center' }}
                    color='white'
                  >
                    <strong>{cardData.crew}</strong>
                  </Typography>
                </div>
                <div className='subTitle'>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: 18,
                        md: 24,
                      },
                      fontWeight: 'bolder',
                      textDecoration: 'underline',
                    }}
                    color='#cd853f'
                    gutterBottom
                  >
                    Passengers
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5, fontSize: 18, textAlign: 'center' }}
                    color='white'
                  >
                    <strong>{cardData.passengers}</strong>
                  </Typography>
                </div>
                <div className='subTitle'>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: 18,
                        md: 24,
                      },
                      fontWeight: 'bolder',
                      textDecoration: 'underline',
                    }}
                    color='#cd853f'
                    gutterBottom
                  >
                    Cost
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5, fontSize: 18, textAlign: 'center' }}
                    color='white'
                  >
                    <strong>{cardData['cost_in_credits']}</strong>
                  </Typography>
                </div>
              </div>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        )}
      </ThemeProvider>
    </>
  );
};

export default StarsCard;
