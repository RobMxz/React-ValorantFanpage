const Home = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <img
          src="https://4kwallpapers.com/images/wallpapers/valorant-girls-3440x1440-14812.jpg"
          alt="Valorant"
          width="100%"
          height="100%"
          style={{
            objectFit: "cover",
            filter: "brightness(30%)",
            zIndex: -1,
            top: 0,
            left: 0,
          }}
        ></img>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            textAlign: "center",
            color: "white",
            letterSpacing: "0.35em",
          }}
        >
          <h1 style={{ margin: "2em 0" }}>VALORANT FANPAGE</h1>
          <p style={{ letterSpacing: "0.2em" }}>
            Welcome to the Valorant Fanpage. This is a fanpage for the game
            Valorant. Here you can find information about the game, the agents,
            the skins, the cards, and the buddies.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
