console.log("connected!!!");
//User Object
let user = {
  username: "username",
  age: generateAge(),
  description: "some description",
  img: "https://picsum.photos/50",
};

function creatUserElement() {
  //Creating Divs
  const containerDiv = document.createElement("div");
  const imgElement = document.createElement("img");
  const usenameElement = document.createElement("h3");
  const ageElement = document.createElement("p");
  const descElement = document.createElement("p");
  //Setting Attributes
  containerDiv.setAttribute("class", "user-container");
  imgElement.setAttribute("class", "profile-img");
  imgElement.setAttribute("src", user.img);
  usenameElement.setAttribute("class", "username");
  //Setting InnetHTML
  usenameElement.innerHTML = user.username;
  ageElement.innerHTML = user.age;
  descElement.innerHTML = user.description;

  let childElements = [imgElement, usenameElement, ageElement, descElement];
  appendChildren(containerDiv, childElements);

  return containerDiv;
}

//Append Children helper function
function appendChildren(parent, children) {
  for (let ele of children) {
    parent.appendChild(ele);
  }
  return parent;
}

//Generate 100 random users
function createUserElements() {
  for (let i = 1; i <= 100; i++) {
    document.body.appendChild(creatUserElement());
  }
}

createUserElements();

//Helper funtion to set multiple attributes to an element
function setAttributes(element, attr) {
  for (let key in attr) {
    element.setAttribute(key, attr[key]);
  }
}

//generates random number
function generateAge() {
  //returns numbers between 18 and 89 that represent user's age
  return Math.floor(Math.random() * (90 - 18) + 18);
}

//Generate random username

//Generate random description
