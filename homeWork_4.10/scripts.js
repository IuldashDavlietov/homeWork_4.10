const parent = document.querySelector('#root')
const btnChild = parent.children;

// myForEach

HTMLCollection.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

btnChild.myForEach((elem) => {
    elem.onclick = () => {
        for (let elem1 of btnChild) {
            elem1.style.background = 'black'
        }
        elem.style.background = 'red';
    }
})

// myMap

HTMLCollection.prototype.myMap = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return {
        result
    };
};

const res = btnChild.myMap(elem => {
    elem.innerText = 'ChangeName'
    console.log(elem);
})

// myReduce

HTMLCollection.prototype.myReduce = function (callback, initialValue) {
    let i = 0;

    if (!initialValue) {
        initialValue = this[0];
        i = 1;
    }
    for (; i < this.length; i++) {
        initialValue = callback(initialValue, this[i].value, i, this);
    }
    return initialValue;
};

// MyFilter

HTMLCollection.prototype.myFilter = function (callback) {
    const newArr = []

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArr.push(this[i])
        }
    }
    return newArr
}