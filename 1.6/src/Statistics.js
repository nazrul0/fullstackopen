import StatisticLine from "./StatisticLine";

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
      <StatisticLine text="good" statistic={props.good} />
      <StatisticLine text="neutral" statistic={props.neutral} />
      <StatisticLine text="bad" statistic={props.bad} />
      <StatisticLine text="all" statistic={total} />
      <StatisticLine text="average" statistic={average} />
      <StatisticLine text="positive" statistic={positive + "%"} />
    </div>
  );
};

export default Statistics;
