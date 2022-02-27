//Creating a function to calculate, in hours, how far one is from their weekly sleep goal
const getSleepHours = day => {
    if (day.toLowerCase() === 'monday' || day.toLowerCase() === 'tuesday' || day.toLowerCase() === 'wednesday' || day.toLowerCase() === 'thursday' || day.toLowerCase() === 'friday' || day.toLowerCase() === 'saturday' || day.toLowerCase() === 'sunday') {
      return 8;
    };
  };
  
  const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
  };
  
  const getIdealSleepHours = () => {
    const idealHours = 8.5;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours()
    const idealSleepHours = getIdealSleepHours()
    if (actualSleepHours === idealSleepHours) {
      console.log("You got the perfect amount of sleep")
    };
    if (actualSleepHours > idealSleepHours) {
      console.log("You got " + (actualSleepHours - idealSleepHours) + " hour(s) more sleep than you needed this week")
    };
    if (actualSleepHours < idealSleepHours) {
      console.log("You got " + (idealSleepHours - actualSleepHours) + " hour(s) less sleep than you needed this week. You need to get some rest")
    }
  }
  
  //Testing the functions
  console.log(getSleepHours('sunday'));
  console.log(getActualSleepHours()); // should print the sum of all sleep hours in the week
  console.log(getIdealSleepHours()); // if idealHours is 8, should print 56
  calculateSleepDebt();