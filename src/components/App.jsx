import play from "./play.png";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>
        Movielist
      </h1>
      <img src={play} alt="play" width="160"/>
      <p>
        easy and fast app for creating movie's playlists
      </p>
    </div>
  );
};

//how insert image to img?
// {}

// <img src={"./logo.jpeg"} />

// <img src={require('./logo.jpeg')} />

// import logo from './logo.jpeg'; // with import

// const logo = require('./logo.jpeg); // with require

// <img src={logo} />

// .

// <img src={require('./one.jpeg')} />

// <img src={require('./logo.jpeg').default} />



//Source: https://stackoverflow.com/questions/39999367


