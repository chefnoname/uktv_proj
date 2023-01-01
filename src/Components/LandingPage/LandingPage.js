import { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import StarsCard from '../StarsCard/StarsCard';
import './LandingPage.css';

const randomSearch = ['starships', 'films', 'vehicles'][
  Math.floor(Math.random() * 3)
];

function sortAlphabetically(array, key, flag) {
  const copy = [...array];
  return copy.sort((a, b) => {
    const x = a[key];
    const y = b[key];
    if (flag) {
      return x < y ? -1 : x > y ? 1 : 0;
    } else {
      return x > y ? -1 : x < y ? 1 : 0;
    }
  });
}

const LandingPage = () => {
  const [formData, setFormData] = useState('starships');
  const [SWAPIRes, setSWAPIRes] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [sortFlag, setSortFlag] = useState(false);

  function debounce(fn, delay) {
    let timer = null;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  }

  useEffect(() => {
    const searchSWAPI = async () => {
      const response = await fetch(
        `https://swapi.dev/api/${formData}/?page=${pageNum}`
      );

      const data = await response.json();

      setSWAPIRes(data.results);
    };

    searchSWAPI();
  }, [formData, pageNum]);

  useEffect(() => {
    if (SWAPIRes[0]) {
      const key = SWAPIRes[0].name ? 'name' : 'title';

      setSWAPIRes(sortAlphabetically(SWAPIRes, key, sortFlag));
    }
  }, [sortFlag]);

  const handleClick = () => {
    setSortFlag(!sortFlag);
  };

  const handleChange = debounce(event => {
    setFormData(event.target.value);
  }, 500);

  console.log(pageNum);

  return (
    <div className='landingContainer'>
      <div className='title'>
        <h1>Welcome</h1>
        <div className='searchBar'>
          <form onSubmit={e => e.preventDefault()}>
            <input
              id='input'
              type='text'
              placeholder='Search'
              onChange={handleChange}
            />
          </form>
        </div>
        <Tooltip title='Click twice for reverse'>
          <Button sx={{ mt: 1 }} onClick={handleClick} variant='contained'>
            Sort Alphabetically
          </Button>
        </Tooltip>
      </div>
      <div className='resultsContainer'>
        {SWAPIRes.map((data, i) => (
          <div className='cards' key={i}>
            <StarsCard cardData={data} formData={formData} />
          </div>
        ))}
      </div>
      {formData !== 'films' && (
        <div className='nextButtons'>
          <Stack
            sx={{ justifyContent: 'space-around', mt: 4 }}
            spacing={2}
            direction='row'
          >
            <Button
              disabled={pageNum === 1}
              sx={{ width: 200, height: 70, fontSize: 20 }}
              variant='contained'
              onClick={() => setPageNum(pageNum - 1)}
            >
              Previous
            </Button>
            <Button
              sx={{ width: 200, height: 70, fontSize: 20 }}
              disabled={pageNum > 3}
              variant='contained'
              onClick={() => setPageNum(pageNum + 1)}
            >
              Next
            </Button>
          </Stack>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
