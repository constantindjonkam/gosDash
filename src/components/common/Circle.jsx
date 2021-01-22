const Circle = ({ color }) => {
  return (
    <i
      className="circle"
      style={{
        backgroundColor: color,
        width: 10,
        height: 10,
        borderRadius: 50,
        marginRight: 6,
      }}
    ></i>
  );
};

export default Circle;
