const labels = document.querySelectorAll('label');

    function inputChek(){
        labels.forEach(label => {
            label.style.color = "white";
            const input = label.querySelector('input');

            input.addEventListener('change',  () => {
                
                
                if(input.checked === true){
                    console.log(111)
                    label.style.color = "rgb(10, 241, 214)";
                    
                }
                
            });
             

        });
        
    }
    labels.forEach(label => {
        label.addEventListener('click', function () {
            inputChek()
        }) 
    });