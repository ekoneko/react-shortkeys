// @see https://github.com/facebook/jest/issues/4545
window.requestAnimationFrame = (callback: any) => {
    return setTimeout(callback, 0);
};
