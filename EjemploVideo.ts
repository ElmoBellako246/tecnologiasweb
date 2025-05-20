function removeVowels(date: string){
    date.replace(/[aeiou]/gi, '')

}

console.log(`The text without value is: ${removeVowels("this is a manner to remove vowels")}`);
