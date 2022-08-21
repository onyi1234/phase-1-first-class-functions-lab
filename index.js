

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(){
 let returnFirstTwoDrivers =[...drivers];
 returnFirstTwoDrivers.splice(2)
  return returnFirstTwoDrivers;
}
function returnLastTwoDrivers(){
  let returnLastTwoDrivers = [...drivers];
  return returnLastTwoDrivers.splice(-2)

}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
function createFareMultiplier(){
    return function(a){
      return a*5;
    }
  }
  function  fareDoubler(fare){
    return fare*2;
  }
  function fareTripler(fare){
    return fare*3;
  }
  function selectDifferentDrivers(drivers, Function){
    if(Function ==returnFirstTwoDrivers){
      return returnFirstTwoDrivers();
    }else if(Function==returnLastTwoDrivers){
      return returnLastTwoDrivers();
    }

  }
