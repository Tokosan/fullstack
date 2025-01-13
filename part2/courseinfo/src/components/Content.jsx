import { Part } from "./Part";

export const Content = ({ parts }) => {
  return (
    <div>
      <ul>
        {parts.map((part) => (
          <Part name={part.name} exercises={part.exercises} key={part.id} />
        ))}
      </ul>
    </div>
  );
};
