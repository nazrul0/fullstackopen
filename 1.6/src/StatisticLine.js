const StatisticLine = (props) => {
  return (
    <div>
      <p>
        {props.text} {props.statistic}
      </p>
    </div>
  );
};

export default StatisticLine;
