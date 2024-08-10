const ZombieFighter = ({ zombi, onAdd }) => {
  const { name, price, strength, agility, img } = zombi;

  return (
    <div className="zombi">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p><span>Price: </span>{price}</p>
      <p><span>Strength: </span>{strength}</p>
      <p><span>Agility: </span>{agility}</p>
      <button onClick={() => onAdd(zombi)}>Add</button>
    </div>
  );
};

export default ZombieFighter;
