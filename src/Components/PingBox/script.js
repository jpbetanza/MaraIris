export function clickAt(x, y) {
    var event = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true,
        'screenX': x,
        'screenY': y
    });
    var element = document.elementFromPoint(x, y);
    if (element) {
        element.dispatchEvent(event);
    }
}