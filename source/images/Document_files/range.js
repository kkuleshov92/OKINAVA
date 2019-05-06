let settings = {
    elements: 5, //default
    imageType: 'jpg', //default
    imageName: 'item', //default
    path: 'img', //default
};








//создание картинок с путями и range
function createContent() {
    let range = {
        elements: settings.elements, //default
        imageType: settings.imageType, //default
        imageName: settings.imageName, //default
        path: settings.path, //default
        container: document.querySelectorAll('.range-container')
    };

    //обертка для контента(картинки)
    let content;

        for(let i = 0; i < range.container.length; i++){
                content = document.createElement('div');
                content.classList.add('range-content');
                range.container[i].appendChild(content);
            //добавление range + label
                let inputLabel = document.createElement('label'),
                inputRange = document.createElement('input');
                inputRange.setAttribute('type', 'range');
                inputRange.setAttribute('value', '1');
                inputRange.setAttribute('min', '1');
                inputLabel.classList.add('range');
                inputLabel.appendChild(inputRange);
                range.container[i].appendChild(inputLabel);

            for(let i = 1; i <= range.elements; i++){
                let imgWrap = document.createElement('div'),
                    image = document.createElement('img');
                imgWrap.classList.add('range-img');
                image.setAttribute('src', range.path + '/' + range.imageName + '-' + i + '.' + range.imageType);
                imgWrap.appendChild(image);
                content[i].appendChild(imgWrap);
            }
        }

    //создание блоков с картинками (с указанием путей)
    // for(let i = 1; i <= range.elements; i++){
    //     let imgWrap = document.createElement('div'),
    //         image = document.createElement('img');
    //         imgWrap.classList.add('range-img');
    //         image.setAttribute('src', range.path + '/' + range.imageName + '-' + i + '.' + range.imageType);
    //         imgWrap.appendChild(image);
    //         content.appendChild(imgWrap);
    // }

    //создание range + label
    // let inputLabel = document.createElement('label'),
    //     inputRange = document.createElement('input');
    //     inputRange.setAttribute('type', 'range');
    //     inputRange.setAttribute('value', '1');
    //     inputRange.setAttribute('min', '1');
    //     inputLabel.classList.add('range');
    //     inputLabel.appendChild(inputRange);
    //     range.container.appendChild(inputLabel);
}

let range1 = createContent();
