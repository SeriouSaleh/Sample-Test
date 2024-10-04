const  CircleHover = document.querySelector('.circle');
const  modal_p = document.querySelector('.modal-p');

CircleHover.addEventListener('mouseover', () => {
    CircleHover.style.backgroundColor = '#ff3c00b3';
    CircleHover.style.transition = '500ms';
    modal_p.style.color = '#ff3c00b3';
    modal_p.style.transition = '500ms';

});
CircleHover.addEventListener('mouseout', () => {
    CircleHover.style.backgroundColor = '';
    CircleHover.style.transition = '500ms';
    modal_p.style.color = '';
    modal_p.style.transition = '500ms';
});
modal_p.addEventListener('mouseover', () => {
    CircleHover.style.backgroundColor = '#ff3c00b3';
    CircleHover.style.transition = '500ms';
    modal_p.style.color = '#ff3c00b3';
    modal_p.style.transition = '500ms';
});
modal_p.addEventListener('mouseout', () => {
    CircleHover.style.backgroundColor = '';
    CircleHover.style.transition = '500ms';
    modal_p.style.color = '';
    modal_p.style.transition = '500ms';
});


