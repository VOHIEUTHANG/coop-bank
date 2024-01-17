const TrafficLight = ({ light = "unknown" }) => {
  const lightStyle = (color) => ({
    width: "40px",
    height: "40px",
    backgroundColor: light === color ? color : "rgba(255,255,255,0.3)",
    borderRadius: "50%"
  });

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div
        style={{
          width: "50px",
          height: "150px",
          backgroundColor: "black",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          margin: "0 auto"
        }}>
        <div style={lightStyle("red")} />
        <div style={lightStyle("yellow")} />
        <div style={lightStyle("green")} />
      </div>
    </div>
  );
};

export default TrafficLight;
