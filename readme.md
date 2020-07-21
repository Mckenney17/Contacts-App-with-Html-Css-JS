# Contacts App with JavaScript
## Introduction
This is a simulation of the Google Android Contacts App. Not 100% perfect as you can see. I've been curious to use the advance stuffs I've things I've learnt in JavaScript. Now I discover that, to use the big stuffs, you gotta build big stuffs.

# Quick Guide through the modules
> If you're not familiar with ES6 modules: Here is a quick guide. Meanwhile, my explanation won't go beyond the scope of this project.

## ES6 Modules
| Module Syntax | Explanation |
| ----------------------- | ---------------------------- |
| `export default 'value'`| `value` can be any value in JavaScript, like **variables, functions, objects classes and so on**, *Why default*? A module can have multiple exports, we'll look at that next, but if you're exporting a single value from the module, you should use the `default` flag. e.g. `export default Contact, export default DOMStrings` |
| `export { value1, value2, value3 }` | Now we're exporting multiple values as you can see, this is not actually exporting objects, those are just curly braces around a list of values, a real object will have properties an methods. You can look that up on your own. Buh I don't think it's necessary, just know. |
| `import 'value' from './file.js'` | So we've been looking at export, now let's see import, we've exported values, maybe functions of objects, now, how do you access them? In the first place, the reason why you export them is because you want to use them in another module. For example, in `boilerplates.js` I export multiple functions that returns a pre-styled html block, to be used in `contactVew.js`. **With this syntax**, you are importing the value you export using `export default value`. Now, one this to note here is that, you can use a different value name to import whatever the exported value is, e.g. `export default value1` can be imported as `import myValue from file.js`. What follows `from` is the file you're importing your value from, you specify it with the path relative to your current path, as you can see in the project `import DOMStrings from './DOMStrings.js'` and elsewhere you see `import DOMStrings from '../modules/DOMStrings.js'`. |
| `import { value1, value2, value3 } from 'path-to-file.js'` | I think with the explation above, you can relate with this for importing multiple exported values, note here, that you **cannot** use a different value name, as this `import {}` syntax is actually **destructuring**, even though the exported value as we've said is not really an object, you can use object destructuring on the exported multiple values in the curly braces `{}`. |
-------

- **functionsUI.js**

I recommend that you take a quick look through the functions that are here so they don't look strange, to use them, I call them with the arguments and they perform their functions. `event(), setStyle(), setProp(), classAction(), classActionMulti(), setStyleMulti(), eventMulti(), resetModal()`. The idea behind the `Multi`, is that there can be multiple of those *non-multi* functions in a block or scope, and the aim is to have just one in a block or scope, so the ones with `Multi` is used in this case.

- **DOMStrings.js**

This is obvious as it contains all the DOM elements to be used.

- **toggles.js**

Handles all the toggling you see, like the **add new contact modal, select/select All modal, deletion selection**

- **boilerplates.js**

I think you can relate with this also, here contains the functions that returns the html, in which the contacts are rendered and the profile is viewed, used by `contactView,js`

- **contactPicUpload.js**

That's a binary API stuff, I can't discuss this here, It's what I implement so thet you're are able to select an image from your local file and have it used in the App.

- **newContact.js**

This is where the contact modal function works, from validation to exporting the values inputed by the user.

- **contactModel.js**

The inputed values that have been exported by `newContact.js`, are been worked with in a way to be used by the App. I export the main stuff with the **unique key** separate, you'll understand why as you walkthrough the code.

- **contactView.js**

Here, is where the big stuff happens, the values from **contactModel.js** are being passed into the `class Contact` that gives each contacts their functionality, from **the way they are rendered**, to **the way they are sorted**, to the way their profile is viewed.

- **searchModel.js and searchView.js**

The former, returns all the contacts that don't match the search string, while the latter handles the filtering in the UI

- **allContacts.js**

Funny, this is just two lines of code, it contains all the contacts that have been created in a `Map()`, as contact are created, the **separate key** I exported are used as keys, and the values are new Objects created by calling the **Contact class** with the `new` keyword passing in the object from the `contactModel.js`, all this happens when the **save button** is clcked.

- **deletion.js**

This is where the deletion takes place, when contacts to be deleted are selected, this function is called when the delete button is clicked, and it does two things, which are: Removing from the UI and deleting the object from the `Map()`.

*Wheww!!!* It's been a long trip. Thanks for checking me out, hope you enjoy walking through the code, please give a like and follow, it goes a long way in my coding life. Thanks bunch.