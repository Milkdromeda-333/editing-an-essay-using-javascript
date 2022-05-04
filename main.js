let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' '); // this line split the string into an array for easier iterating.
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

let count = 0;
storyWords.forEach(word =>{
  count++
})
  //console.log(count) 
// this piece of code counts how many elements are in the array and logs it

storyWords = storyWords.filter(word =>{
if(word !== unnecessaryWord){return word}
});
// this piece of code filters out words that equal the value of the variable unnecessaryWord, which is the word literally.

storyWords = storyWords.map(word => word !== misspelledWord ? word : 'beautiful' );
// this line makes a new array after checking to see that each element doesnt equal the value of misspelledWord. If it does equal that it replaces it with the word 'beautiful'

let badWordIndex = storyWords.findIndex(word => word === badWord);
storyWords[78] = 'really';
// this piece of code locates the index of an element that equals the value of badWord, which is the word freaking, and then reassigns the element at the index with the word really.

const lengthCheck = storyWords.every(word => word.length < 10);
  //console.log(lengthCheck) returns false
const longWordIndex = storyWords.findIndex(word => word.length > 10);
storyWords[longWordIndex] = 'dazzling';
/* this piece of code checks to see if all values are shorter than 10, returning a boolean value. And then it uses findIndex() method to find the index
of a word whose length is greater than 10 and saves that value to a variable. And, finally, it reassigns the value of said index to another word.*/

console.log(storyWords.join(' '))

/* Outpitting
Last weekend, I took the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park 
in Manhattan to South Nyack, New Jersey. It's really an adventure from beginning to end! It is a 48 mile loop and it took me an entire day. I stopped
at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a really long way to go. After a quick photo op at the 
very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a dazzling 4,760 feet long! I was 
already very  tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the 
coast of the Hudson. Something that was very surprising to me was that near the end of the route you cross back into New York! At this point, you are
very close to the end.*/
