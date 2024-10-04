const CloseSvgParagraph = document.querySelector('#close');
const CloseSvg = document.querySelector('#close-svg');

CloseSvgParagraph.addEventListener('mouseover', () => {
    CloseSvg.style.fill = '#ff3c00b3';
});
CloseSvgParagraph.addEventListener('mouseout', () => {
    CloseSvg.style.fill = '';
});