import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import OpenModal from '../OpenModal/OpenModal';

import './StarsCard.css';

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
      {formData === 'films' ? (
        <Card sx={{ minWidth: 350, minHeight: 300, padding: 2 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 24 }}
              color='text.secondary'
              gutterBottom
            >
              {cardData.title}
            </Typography>
            <Typography variant='h5' component='div'>
              {/* be{bull}nev{bull}o{bull}lent */}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              Episode: {cardData['episode_id']}
            </Typography>

            <Typography sx={{ mt: 1.5, width: '250px' }} color='text.secondary'>
              Directed by {cardData.director}
              <br />
              <br />
              Produced by {cardData.producer}
              <br />
              <br />
              {formatDate(cardData['release_date'])}
            </Typography>
          </CardContent>
          <CardActions>
            <OpenModal opening={cardData['opening_crawl']} />
          </CardActions>
        </Card>
      ) : (
        <Card sx={{ minWidth: 500, minHeight: 300, padding: 2 }}>
          <CardContent>
            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 'bolder',
                textDecoration: 'underline',
              }}
              color='text.secondary'
              gutterBottom
            >
              {cardData.name}
            </Typography>

            <Typography sx={{ mb: 1.5, width: '200px' }} color='text.secondary'>
              <strong>Model:</strong> {cardData.model}
              <br />
              <br />
              Manufacturer: {cardData.manufacturer}
              <br />
              <br />
              Length: {cardData.length}m
              <br />
              Cargo Cap. : {cardData['cargo_capacity']} ltr
            </Typography>
            <div className='vehicleDetail'>
              <div className='subTitle'>
                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: 'bolder',
                    textDecoration: 'underline',
                  }}
                  color='text.secondary'
                  gutterBottom
                >
                  Crew
                </Typography>
                <Typography
                  sx={{ mb: 1.5, fontSize: 18, textAlign: 'center' }}
                  color='text.secondary'
                >
                  {cardData.crew}
                </Typography>
              </div>
              <div className='subTitle'>
                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: 'bolder',
                    textDecoration: 'underline',
                  }}
                  color='text.secondary'
                  gutterBottom
                >
                  Passengers
                </Typography>
                <Typography
                  sx={{ mb: 1.5, fontSize: 18, textAlign: 'center' }}
                  color='text.secondary'
                >
                  {cardData.passengers}
                </Typography>
              </div>
              <div className='subTitle'>
                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: 'bolder',
                    textDecoration: 'underline',
                  }}
                  color='text.secondary'
                  gutterBottom
                >
                  Cost
                </Typography>
                <Typography
                  sx={{ mb: 1.5, fontSize: 18, textAlign: 'center' }}
                  color='text.secondary'
                >
                  {cardData['cost_in_credits']}
                </Typography>
              </div>
            </div>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      )}
    </>
  );
};

export default StarsCard;
