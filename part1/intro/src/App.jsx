const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]} />
    </div>
  );
};

const Total = (props) => {
  console.log(props);
  let exercises = props.course.parts.map((part) => part.exercises);
  let total = 0;
  for (let i = 0; i < exercises.length; i++) {
    total += exercises[i];
  }
  console.log(total);
  return <p>Number of exercises: {total} </p>;
  // <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
