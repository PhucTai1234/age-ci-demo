function calculateAge(birthYear) {
  const currentYear = 2025;
  return currentYear - birthYear;
}

function isAdult(birthYear) {
  const age = calculateAge(birthYear);
  return age >= 18;
}

module.exports = { calculateAge, isAdult };
