const items = document.querySelectorAll('.item');
items.forEach(function(item){
    item.addEventListener('click', function(e){
        item.classList.toggle('open');
    })
});