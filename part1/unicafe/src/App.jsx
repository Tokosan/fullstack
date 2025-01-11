import { useState } from "react";

function Button({ newValue, setter, text }) {
  const handleClick = () => {
    setter(newValue);
  };

  return <button onClick={handleClick}>{text}</button>;
}

function StatisticLine({ text, value }) {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}

function Statistics({ values }) {
  const all = values[0] + values[1] + values[2];

  const average = (values[0] - values[2]) / all;

  const positive = (values[0] / all) * 100;
  if (all > 0) {
    return (
      <>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="Good" value={values[0]}></StatisticLine>
            <StatisticLine text="Neutral" value={values[1]}></StatisticLine>
            <StatisticLine text="Bad" value={values[2]}></StatisticLine>
            <StatisticLine text="All" value={all}></StatisticLine>
            <StatisticLine text="Average" value={average}></StatisticLine>
            <StatisticLine text="Positive" value={positive}></StatisticLine>
          </tbody>
        </table>
      </>
    );
  }
  return <p>No feedback given yet</p>;
}

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  return (
    <div>
      <h1>Give Feedback!</h1>
      <Button newValue={good + 1} setter={setGood} text="Good" />
      <Button newValue={neutral + 1} setter={setNeutral} text="Neutral" />
      <Button newValue={bad + 1} setter={setBad} text="Bad" />
      <Statistics values={[good, neutral, bad]} />
    </div>
  );
}

export default App;
