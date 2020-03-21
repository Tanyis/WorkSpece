import { createElement, render } from './element.js'

let vertualDom = createElement('ul', { class: 'list' }, [
    createElement('li', { class: 'item' }, ['a']),
    createElement('li', { class: 'item' }, ['b']),
    createElement('li', { class: 'item' }, ['c'])
]);
let el = render(vertualDom)
console.log(el)
console.log(vertualDom)
