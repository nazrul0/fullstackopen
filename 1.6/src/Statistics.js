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
      {/* <StatisticLine text="good" statistic={props.good} />
      <StatisticLine text="neutral" statistic={props.neutral} />
      <StatisticLine text="bad" statistic={props.bad} />
      <StatisticLine text="all" statistic={total} />
      <StatisticLine text="average" statistic={average} />
      <StatisticLine text="positive" statistic={positive + "%"} /> */}

      <table>
        <tr>
          <td>good</td>
          <td>{props.good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{props.neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{props.bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{total}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{average}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{positive + "%"}</td>
        </tr>
      </table>
    </div>
  );
};

export default Statistics;
