const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity !== "string" ||
    isNaN(Number.parseFloat(sampleActivity)) ||
    sampleActivity === undefined ||
    +sampleActivity >= 15 ||
    +sampleActivity <= 0
  )
    return false;

  let res =
    Math.log(MODERN_ACTIVITY / Number.parseFloat(sampleActivity)) /
    (0.693 / HALF_LIFE_PERIOD);

  return Math.ceil(res);
};
