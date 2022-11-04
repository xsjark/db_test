const names = ["50 Cent","Abraham","Abraham Lincoln","Adam Sandler","Albert Einstein","Alec Baldwin","Alex Rodriguez","Alexander the Great","Amelia Earhart","Angelina Jolie","Anne Frank","Anne Hathaway","Aristotle","Arnold Schwarzenegger","Audrey Hepburn","Augustus","Babe Ruth","Barack Obama","Barbra Streisand","Ben Stiller"]
const cities = ["Venice", "Lagos", "Mumbai", "Quito", "Baghdad"]
const getRandomInt = (max) =>  Math.floor(Math.random() * max);
const getRandomFromArray= (arr) => arr[getRandomInt(arr.length - 1)];
const getRandomDate = () => {
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    return new Date(timestamp);
}
module.exports = {names, cities, getRandomInt, getRandomFromArray, getRandomDate}
