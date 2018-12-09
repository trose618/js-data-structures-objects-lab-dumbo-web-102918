// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
  newObj = {...driver}
  newObj[key] = value
  return newObj
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value
  return driver
}
function deleteFromDriverByKey(driver, key){
  tempObj = {...driver}
  delete tempObj[key]
  return tempObj
}
function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver
}
