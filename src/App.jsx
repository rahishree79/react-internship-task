import Skills from "./components/skills";

function App() {

  const mySkills = [
    { name: "JavaScript", level: 85 },
    { name: "React", level: 70 },
    { name: "Node JS", level: 90 }
  ];

  return (
    <div>
      <h1>My Skill Set</h1>

      <Skills data={mySkills} />
    </div>
  );
}

export default App;