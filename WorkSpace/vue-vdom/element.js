class Element{
    constructor(type, props, children) {
        this.type = type;
        this.props = props;
        this.children = children
    }
}
function createElement(type, props, children) {
    return new Element(type, props, children);
};

function setAtrr(node, key, value) {
    switch (key) {
        case 'value':
            if (node.tagName.toUpperCase() === 'INPUT'
                || node.tagName.toUpperCase() === 'TEXTAREA') {
                node.value = value;
            } else {
                node.setAtrribute(key, value);
            }
            break;
        case 'style':
            node.style.cssText = value;
            break;
    }    
} 
//render方法
function render(eleOj) {
    let el = document.createElement(eleOj.type);
    for (let key in eleOj.props) {
        //设置属性
        setAtrr(el, key, eleOj.props[key]);
    }
    eleOj.children.forEach(child => {
        child = (child instanceof Element) ? render(child)
            : document.createTextNode(child);
        el.appendChild(child);
    });
    return el;
}
export { createElement,render }