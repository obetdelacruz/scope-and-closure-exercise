const playerFactory = (name, level) => {
  let health = level * 2;
  const getLevel = () => level;
  const getName = () => name;
  const getHealth = () => health;

  const die = () => console.log(`Player ${name} is dead`);

  const damage = (dmg) => {
    health -= dmg;

    if (health <= 0) {
      die();
    }
  };

  const attack = (enemy) => {
    enemy.attackdamage(1);
    console.log(`${enemy.getName()} has been damage`);
    console.log(`The enemy's current health is: ${enemy.getHealth()}`);
  };

  return { getLevel, getName, getHealth, attack, damage };
};

const player = playerFactory("Obet", 10);
const enemy = playerFactory("Monster", 5);
console.log(player);
console.log(enemy);
