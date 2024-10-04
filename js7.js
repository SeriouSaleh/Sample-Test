let shareIcon =document.querySelectorAll('.flex-box-share-icon');
let Modal = document.getElementById("Share-Modal-container");
const close = document.getElementById("close");

function openModal(){
    Modal.style.display='block';
};
function closeModal(){
    Modal.style.display='none'
};
close.addEventListener("click",closeModal);

shareIcon.forEach(function(item){
    item.addEventListener("click",openModal);
})

