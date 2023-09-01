export function clickAt(x, y, elem) {
    var event = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true,
        'layerX' : x, 
        'layerY' : y,
        'screenX': x,
        'screenY': y,
        'clientX': x,
        'clientY': y,
        'offsetX': x,
        'offsetY': y,
        'pageX'  : x,
        'pageY'  : y,
    });
    console.log('CLICANDO!')
    elem.dispatchEvent(event);
}
