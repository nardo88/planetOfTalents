const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
const selectSist = document.querySelector('.select-list');
const controlInput = document.querySelector('.control__input');
const controlSelect = document.querySelector('.control__select');
const controlToggleFind = document.querySelector('.control__toggle-find');


const openPopup = () => {
    overlay.classList.toggle('open-popup');
    popup.classList.toggle('popup-active');
}

const toggleFindList = () => {
    controlToggleFind.classList.toggle('rotate-arrow')
    controlSelect.classList.toggle('block')
}

document.addEventListener('click', e => {
    const target = e.target;

    if (target.classList.contains('main__btn')){
        openPopup();
    }

    if (target.classList.contains('overlay')){
        openPopup();

    }
    if (target.classList.contains('popup__close')){
        openPopup();

    }
    if (target.classList.contains('control__btn')){
        openPopup();

    }
    if (target === controlToggleFind){
        toggleFindList();
        
    }

})

// выпадающий список

const arr = ['Театр', 'Фотография', 'музыка', 'мода и боди-арт', 'артисты', 'танцы', 'кино', 'телевидение', 'дизайн', 'ремесло', 'живопись'];

const render = (arr) => {
    selectSist.innerHTML = '';
    arr.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('select-list__item');
        li.innerHTML = item;
        selectSist.insertAdjacentElement('beforeend', li);
    })
}

render(arr);

controlInput.addEventListener('input', (e) => {
    const text = e.target.value;
    if (text){
        const newArr = [];
        const regExp = new RegExp('^' + e.target.value + '', 'i')

        arr.forEach(item => {
            if (regExp.test(item)){
                let newStr = item.replace(regExp, match => `<b>${match}</b>`)
                newArr.push(newStr)
            }
        })
        if (newArr.length){
            render(newArr);

        } else {
            selectSist.innerHTML = '';
            const li = document.createElement('li');
            li.classList.add('select-list__item');
            li.textContent = 'Совпадений нет';
            selectSist.insertAdjacentElement('beforeend', li);
        }
    } else {
        render(arr);
    }
})


controlInput.addEventListener('focus', () => {
    controlToggleFind.classList.add('rotate-arrow')
    controlSelect.classList.add('block')
})
