module.exports = {
  success,
  fail,
  repair,
  get,
};

let name = 'stick';
let enhancement = 17;
let durability = 15;

function success(item) {
  if (enhancement >= 20) {
    return;
  } else {
    enhancement += 1;
    return { ...item, enhancement };
  }
}

function fail(item) {
  if (enhancement < 15) {
    durability -= 5;
    return { ...item, durability };
  } else if ((enhancement = 15)) {
    if (enhancement > 16) {
      enhancement -= 1;
    } else {
      durability -= 10;
    }
    return { ...item, durability, enhancement };
  } else {
    return;
  }
}

function repair(item) {
  durability = 100;
  return { ...item, durability };
}

function get(item) {
  return { ...item };
}
