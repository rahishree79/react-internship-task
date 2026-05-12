function SkillCard({ name, level }) {

  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px",
        borderRadius: "10px"
      }}
    >

      <h2>{name}</h2>

      <p>Level: {level}</p>

      {level >= 90 ? <p>⭐ Expert</p> : <p>📘 Learning</p>}

    </div>
  );
}

export default SkillCard;