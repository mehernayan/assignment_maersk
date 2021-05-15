const shuffle = function(){
    let  container = document.getElementById('grid-container');
    for (let i = container.children.length; i >= 0; i--) {
        container.appendChild(container.children[Math.random() * i | 0]);
    }
}

const sort = function(){
    let  container = document.getElementById('grid-container');
    let childElements = container.children;
    childElements = Array.prototype.slice.call(childElements);
    childElements.sort((a, b) => a.textContent - b.textContent);
    for(let i = 0; i < childElements.length; i++) {
        container.appendChild(childElements[i]);
    }
}