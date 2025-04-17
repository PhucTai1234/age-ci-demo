function calculateAge(birthYear) {
  const currentYear = 2025;
  return currentYear - birthYear;
}

function isAdult(birthYear) {
  const age = calculateAge(birthYear);
  return age >= 18;
}

function isSenior(birthYear) {
  const age = calculateAge(birthYear);
  return age >= 60;
}

function isTeen(birthYear) {
  const age = calculateAge(birthYear);
  console.log("Checking teen age:", age); // Thêm dòng này để minh họa
  return age >= 13 && age <= 19;
}

module.exports = { calculateAge, isAdult, isSenior, isTeen };
