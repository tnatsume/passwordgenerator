'use script'
    var slider = document.getElementById('slider');
    var label = document.getElementById('label');
    var btn = document.getElementById('btn');
    var result = document.getElementById('result');
    
    var numbers = document.getElementById('numbers');
    var symbols = document.getElementById('symbols');

    slider.addEventListener('change',function(){
        console.log(this.value);
        if(this.value < 10 ){
            label.innerHTML = '0' + this.value;
        }else{
            label.innerHTML = this.value;
        }
    });
    function getPassword(){
        var seed_letters = 'abcdefghijklmnopqrstuvwxyz';
        var seed_numbers = '0123456789';
        var seed_symbols= '!#$%&()';
        var seed
        var len = slider.value;
        var pwd = '';

        seed = seed_letters + seed_letters.toUpperCase();
        if ( numbers.checked === true){
            seed += seed_numbers;
        }
        if ( symbols.checked){
            seed += seed_symbols;
        }
        // for ( var i = 0 ; i < len ; i ++){
        //     pwd += seed[Math.floor(Math.random()*seed.length)];
        // }
        while (len --){
            pwd += seed[Math.floor(Math.random()*seed.length)];
        }

        result.value =pwd;
    }
    btn.addEventListener('click',function(){
        getPassword();
        // result.value = "this button was clicked.";
        
    });
    result.addEventListener('click',function(){
        this.select();
        
    });
    getPassword();
    