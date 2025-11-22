// JSX.jsx

const name = "Prakhar Shukla";
const age = 22;
const isStudent = true;

export default function JSX() {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{isStudent ? "Student" : "Not a Student"}</h3>
    </div>
  );
}
