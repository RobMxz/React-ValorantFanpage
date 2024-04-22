const Error = ({ message }: { message: string }) => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <img
          src="https://tasbihdigital.com/wp-content/uploads/2022/10/Valorant-Wallpaper-For-Desktop.jpg"
          alt="Search Error"
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
          <h1 style={{ margin: "2em 0" }}>ERROR</h1>
          <p style={{ letterSpacing: "0.2em" }}>{message}</p>
        </div>
      </div>
    </>
  );
};

export default Error;
