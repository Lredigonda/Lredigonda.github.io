//DOM ELEMENTS
const filterButtons = document.getElementsByClassName('main__filters')[0].children

//Functions
const showElement = (element, addClass, deleteClass) => {
    classtype = element.className;

    switch(classtype) {
        case addClass:
            element.classList.remove(addClass);
            element.classList.add(deleteClass);
            break
        case deleteClass:
            element.classList.remove(deleteClass);
            element.classList.add(addClass)
            break;
    }
};

[...filterButtons].forEach(button => {
    button.addEventListener('click', () => {
        const articles = button.parentNode.nextElementSibling.children;

        for(let i = 0; i < articles.length; i++) {
            if(articles[i].className === 'main__filters-article-active') {
                showElement(articles[i], 'main__filters-article', 'main__filters-article-active');
            }else if (button === [...filterButtons][i]) {
                showElement(articles[i], 'main__filters-article', 'main__filters-article-active');
            }
        }
    });
});

