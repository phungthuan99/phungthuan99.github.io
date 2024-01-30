$(document).ready(function(){
    $('.add').on('click', function(e){
        var items = $('input[type=radio]');
        for(var i = 0;i<items.length;i++){
            var check = items[i].checked;
            if(check){
                console.log(items[i].value);
            }
        }
    });
    function addKQ(name){
        var html = '';
        switch (name) {
            case 'chan':
                
                break;
            case 'le':
                break;
            case 'xap':
                break;
            default:
                break;
        }
    }
})