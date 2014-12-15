
/**
 * Get position of a point (left/top)
 * on a circle.
 *
 * A point is calculated given an angle
 * and the circle radius.
 *
 * Examples:
 * 
 *  var position = circle(30, 60);
 *  position(); // 0 degree
 *  position(); // 30 degrees
 *  position(); // 60 degrees
 *
 * @param {Number} degree
 * @param {Number} radius
 * @return {Function}
 * @api private
 */
 
module.exports = function(degree, radius) {
  var angle = 0;
  return function() {
    var radian = angle * Math.PI / 180;
    angle += degree;
    return {
      left: Math.cos(radian) * radius,
      top: Math.sin(radian) * radius
    };
  };
};
