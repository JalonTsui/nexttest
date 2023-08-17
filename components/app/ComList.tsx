const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];
export const ComList2 = () => {
  return [<div key={1}>456</div>, <div key={2}>123</div>];
};
export default function ComList() {
  return (
    <ul>
      {people.map((item) => {
        return <li key={item}>{item}</li>;
      })}
      {[<div key={1}>456</div>, <div key={2}>123</div>]}
    </ul>
  );
}
