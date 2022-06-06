let cubesList = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  cubeContainer = document.getElementById('cube-container'), appendCubeElement;

cubesList.forEach((item, index) => {
  cubeContainer.innerHTML += '<li cube-item=' + item + '>' + item + '</li>'
})
shuffleCubesList = () => {
  let index = 0
  cubesList = cubesList.sort(() => { return .5 - Math.random() });
  cubeContainer.innerHTML = ''
  while (index < cubesList.length) {
    let cubeItem = document.createElement("li");
    cubeItem.innerHTML = cubesList[index]
    cubeItem.setAttribute('cube-item', cubesList[index])
    cubeContainer.appendChild(cubeItem)
    ++index;
  }
}
sortCubesList = () => {
  let index = 0
  cubesList = cubesList.sort((a, b) => { return a - b });
  cubeContainer.innerHTML = ''
  while (index < cubesList.length) {
    let cubeItem = document.createElement("li");
    cubeItem.innerHTML = cubesList[index]
    cubeItem.setAttribute('cube-item', cubesList[index])
    cubeContainer.appendChild(cubeItem)
    ++index;
  }
}

shuffleCubeValues = (numbersArrayItems) => {
  let index = 0, cubesList = numbersArrayItems;
  cubeContainer.innerHTML = ''
  for (let i = cubesList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cubesList[i], cubesList[j]] = [cubesList[j], cubesList[i]];
  }
}

shufflingCubesList = () => {
  let index = 0
  shuffleValues(cubesList)
  cubeContainer.innerHTML = ''
  while (index < cubesList.length) {
    let cubeItem = document.createElement("li");
    cubeItem.innerHTML = cubesList[index]
    cubeItem.setAttribute('cube-item', cubesList[index])
    cubeContainer.appendChild(cubeItem)
    ++index;
  }
};