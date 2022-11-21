/* ****************************************+
2 Coding Challenge
 */

const johnLast3Results = [89, 120, 103];
const mikeLast3Results = [5, 94, 123];
const maryLast3Results = [97, 134, 105];
let avgJohnPerWin; let avgMikePerWin; let avgMaryPerWin; let 
winnerAnnouncement;

const methods = {
  calcAvg(name, resultsArray) {
    const totalSumArray = resultsArray.reduce((accumulator, currentValue) => accumulator + currentValue);
    // console.log(totalSumArray);
    return [name, totalSumArray / (resultsArray.length)];
  },
  checkBiggestWinner(avg1, avg2, avg3) {
    switch (true) {
      case avg1[1] > avg2[1] && avg1[1] > avg3[1]:
        console.log(`${avg1[0]} has the best average win with ${avg1[1]}`);
        break;
      case avg2[1] > avg1[1] && avg2[1] > avg3[1]:
        console.log(`${avg2[0]} has the best average win with ${avg2[1]}`);
        break;
      case avg3[1] > avg1[1] && avg3[1] > avg2[1]:
        console.log(`${avg3[0]} has the best average win with ${avg3[1]}`);
        break;
      default:
        console.log('There\'s at least two players with the same average');
    }
  },
};

avgJohnPerWin = methods.calcAvg('John', johnLast3Results);
avgMikePerWin = methods.calcAvg('Mike', mikeLast3Results);
avgMaryPerWin = methods.calcAvg('Mary', maryLast3Results);
methods.checkBiggestWinner(avgJohnPerWin, avgMikePerWin, avgMaryPerWin);
