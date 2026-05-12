import SkillCard from "./skillcard";

function Skills({ data }) {

  return (
    <div>

      {data.map((skill, index) => (
        <SkillCard
          key={index}
          name={skill.name}
          level={skill.level}
        />
      ))}

    </div>
  );
}

export default Skills;