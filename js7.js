const Modal_item_collector = document.querySelectorAll("Modal-flex-item");
const Modal_circle_collector=document.querySelectorAll("circle");
const Modal_p_collector=document.querySelectorAll(p);

Modal_item_collector.addEventListener("mouseenter",function(){
    Modal_circle_collector.style.backgroundColor="orange";
    Modal_p_collector.style.backgroundColor="orange";
})