# My Country List Application (using React.js)

In this project, I created an application through React.js in which the user can enter a North American
country code, and after submitting that information it will return a list of the countries that are
necessary to pass through in order to reach that country from the United States of America. The finished product can be viewed at https://countrylistapp.azurewebsites.net/.

## Background

Although this is the first time that I used React.js, because I have previous experience with creating web-applications with JavaScript, I think that I was able to get the very basics of how a React application
works. I learned things like making components, using React state instead of directly altering DOM objects,
and more. It was also the first time I had used Azure to deploy my own application, but similarly to learning React, I was able to look up some guides on how to get my application up and running. My previous experience using Heroku to deploy other projects helped me understand how it worked.

## Design Process

For any project or assignment, I like to define what exactly we are trying to accomplish through the project. In this case, the problem is that we need a way to input a country code, and from that code we need to output the correct list of countries. To start, I needed to find out how to create a React application, which I did through
create-react-app. Next, I figured out how to add things like text boxes, headers, etc. through the use of components. After figuring out the base of the program and getting it to work, I added some CSS styling to make it look a little better. Finally, I had to figure out how to push my code to the Azure repo and deploy it from there.

## Design Choices

One design choice I thought of was what to do in the case that the user inputs an incorrect country code -- I decided to just make the page give the user an alert. I also needed a way to store and get the list of valid country codes, as well as their respective travel lists, in which I used a basic JavaScript object as a sort of "dictionary".