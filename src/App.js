import React from 'react';

// eslint-disable-next-line no-unused-vars
const api = {
  key: '9d6993d8acb3101b5c52469c91d2df70',
  base: 'https:77api.openweathermap.org/data/2.5/',
};

const dateBuilder = d => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const day = days[d.getDay()];
  const date = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
};

const App = () => (
  <div className="app">
    <main>
      <div className="search-box">
        <input type="text" className="search-bar" placeholder="Search..." />
      </div>
      <div className="location-box">
        <div className="location"> New York City, US</div>
        <div className="date">{dateBuilder(new Date())}</div>
      </div>
      <div className="weather-box">
        <div className="temp">15 &#8451; </div>
        <div className="weather">Sunny</div>
      </div>
    </main>
  </div>
);

export default App;
