$(document).ready(function(){
    $('.add').on('click', function(e){
        if (confirm("Press a button!") == true) { 
            var items = $('input[type=radio]');
            for(var i = 0;i<items.length;i++){
                var check = items[i].checked;
                if(check){
                    console.log(items[i].value);
                    addKQ(items[i].value)
                }
            }
        }
    });
    function addKQ(name){
        var html = '';
        switch (name) {
            case 'chan':
                html = `<div class="item-chan"></div>`;
                break;
            case 'le':
                html = `<div class="item-le"></div>`;
                break;
            case 'xap':
                html = `<div class="item-xap"></div>`;
                break;
            case 'tu':
                html = `<div class="item-tu"></div>`;
                break;
        }
        $('.add-here').append(html)
    }
})