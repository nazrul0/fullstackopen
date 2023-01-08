const Statistics = (props) => {
  let total = props.good + props.neutral + props.bad;
  let average = (props.good * 1 + props.bad * -1) / total || 0;
  let positive = (props.good / total) * 100 || 0;

  if (total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  );
};

export default Statistics;
