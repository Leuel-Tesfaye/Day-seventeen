/** webStorage : is more secure and large amounts of data can be stored locally without affecting website performance.
 * data storage of cookies is about 4kb but the webStorage is about 5mb 
 * The data being stored can be accessed using js that gives us the ability to leverage client side scripting : traditionally which involved server-side programming and relational db's . 
 * Two web-storage objects  : 1 . sessionStorage 
 *                             2. localStorage
 * The difference between the two is : local storage has no expiration time 
 */

/** SessionStorage is only available on the browsers tab or window session 
 * designed to store data on a single webpage session . 
 * if the window closed session data will be removed 
 * 
 */

/** HTML5 localStorage : used to store data with no expiration data. 
 * local-storage is kept even in between browser session . 
 *  
  */

// Setting item to the localStorage

localStorage.setItem('firstName', 'Prince')
console.log(localStorage)

//storing a number in a local storage 
localStorage.setItem('age', 24)
console.log(localStorage)

// if we are storing an array in local storage we need to stringify the object first

const skills = ['html', 'css' ,'js','react']
const skillsJson = JSON.stringify(skills)
localStorage.setItem('skills', skillsJson)
console.log(localStorage)

// storing an object in local storage : must be stringify 

const users = {
    firstName: 'prince',
    lastName: 'Hope',
    age : '24'
}
const userText = JSON.stringify(users)
localStorage.setItem('users', userText)
console.log(localStorage)

// getting item form local storage : use getItem () and key 

const skill = localStorage.getItem('skills')
console.log(skill)
