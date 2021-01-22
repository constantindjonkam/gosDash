import "./styles/timeLine.css";

const TimeLine = ({ time }) => {
  return (
    <div className="timeLine">
      <p>{time} am</p>
      <p className="timeLine__line"></p>
    </div>
  );
};

export default TimeLine;
