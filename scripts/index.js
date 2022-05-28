//DOM ELEMENTS
const operacion = document.getElementById('operacion')
const operacionArticle = document.getElementsByClassName('operacion_article')[0]

//Functions

const showElement = (element) => {
    classtype = element.className

    switch(classtype) {
        case 'operacion_article':
            element.classList.remove('operacion_article')
            element.classList.add('operacion_article-show')
            break
        case 'operacion_article-show':
            element.classList.remove('operacion_article-show')
            element.classList.add('operacion_article')
            break
    }
}

operacion.addEventListener('click', () => {
    showElement(operacionArticle)
})
