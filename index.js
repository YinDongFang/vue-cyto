const arrayAverage = require('./arrayAverage')
const randomColor = require('./randomColor')

module.exports = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }