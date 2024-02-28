const hotDates = [
  ['Stacy', 'Manuel', 'Emer', 'Astrid', 'Obediah', 'Zachery', 'Nellie'],
  ['Eating Competitions', 'Bloodsport Gambling', 'Staying Still', 'Watching Books', 'Public Meditation', 'Tickle Fighting', 'Past-life Regression'],
  ['Eczema', 'Insatiable Greed', 'Afraid of Cold Sheets', 'Financially Suicidal', 'Casual Alcoholic', 'Commitmentphobe', 'Cult Member']
]

const randomIndex1 = Math.floor(Math.random() * 7);
const randomIndex2 = Math.floor(Math.random() * 7);
const randomIndex3 = Math.floor(Math.random() * 7);

const randomDate = () => {
  return `Hey Good Looking!
  
  ${hotDates[0][randomIndex1]} is you're hot date for tonight.
  They love: ${hotDates[1][randomIndex2]}
  Their weakness is: ${hotDates[2][randomIndex3]}`
}

console.log(randomDate());