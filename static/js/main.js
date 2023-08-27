document.addEventListener("DOMContentLoaded", function () {

   
     

    //QUIZ START
    let quiz_form = document.querySelector('.quiz_form');
    if (quiz_form) {
        let PrevBtn = quiz_form.querySelector('.btnPrev');
        let nextBtn = quiz_form.querySelector('.btnNext');
        let quizAll = quiz_form.querySelectorAll('.quiz_block');
        let currentQ = quiz_form.querySelector('.currentQ');
        let progressQ = quiz_form.querySelector('.progress');
        let progress = 0;
        
        let count = 0;
        let progressPercent = 100 / (quizAll.length - 1);
        
        
        let fisss1 = document.querySelectorAll('[name = "fiss1"]');
        
        function btnBlock() {   
            if(count === 4 || count === 5 || count === 6  || count === 8 || count === 10 || count === 11 || count === 12  || count === 13 || count === 14 ||  count === 16  || count === 17 || count === 19 || count === 20 || count === 21 || count === 22 || count === 24  || count === 25 || count === 28 ||   count === 29  || count === 34 || count === 35  || count === 36 || count === 37 || count === 38 || count === 39  || count === 40 || count === 41 ||  count === 44  || count === 45 || count === 46 || count === 48 || count === 49 || count === 54 || count === 58  || count === 59 || count === 60 ||   count === 61  || count === 62 || count === 63 || count === 67 || count === 70  || count === 76 ){ 
                nextBtn.classList.add('btn-block');
                nextBtn.disabled = true
                fisss1.forEach(fisss1 => {
                    /* console.log(2324) */
                        fisss1.addEventListener('click', () => {
                                
                            if(fisss1.checked) {
                                nextBtn.classList.remove('btn-block');
                                nextBtn.disabled = false
                                } else {
                                    nextBtn.classList.remove('btn-block');
                                    nextBtn.disabled = false
                                }
                            
                            
                        })
                    
                });
            }
            
        } 
        

        const btnNext = document.getElementById('btnNext');

        let mySelect = document.getElementById("optionThree");
        let mySelect1 = document.getElementById("mySelect");
        let atelier = document.getElementById("atelier");
        let hall = document.getElementById("hall");
        let scene = document.getElementById("scene");
        let scene2 = document.getElementById("scene2");
        function vibor() {
            if(count === 25){
                btnNext.addEventListener('click', function() {
                    let selectedValue = mySelect1.querySelector('input:checked').value;
                    
                    
                    if (selectedValue === 'optionOne') {
                        
                        atelier.style.display = 'block';
                        hall.style.display = 'none';
                    console.log(23145352)
                    }  if (selectedValue === 'optionTwoo') {
                        
                        hall.style.display = 'block';
                        atelier.style.display = 'none';
                    console.log(11111)
                    } 
                });
            }
        }
        

            initProgress();
            removeBtn();

            quiz_form.querySelector('.allQ').textContent = `${quizAll.length}`;

            nextBtn.addEventListener('click', function () {
                currentQ.textContent++;
                count++
                progress += Number(progressPercent.toFixed(3));
                initQuiz();
                initProgress();
                removeBtn();
                console.log(count)
                btnBlock()
                vibor()
                vibor2()
            })


            PrevBtn.addEventListener('click', function () {
                count--
                currentQ.textContent--;
                progress -= Number(progressPercent.toFixed(3));
                initQuiz();
                initProgress();
                removeBtn();
                btnBlock()
            })
        

        function initQuiz() {
            quizAll.forEach((element, i) => {
                element.classList.remove('active')
                if (i === count) {
                    element.classList.add('active')
                }
            })
        }
        function vibor2() {
            if(count === 41){
                btnNext.addEventListener('click', function () {
                    if (count === 42 && scene.checked == true ){
                        console.log(11111111111111)
                        
                        
                        count += 1;
                          
                    }            
                        
            })
            }
        }

        

        

        function initProgress() {
            progressQ.style.width = `${progress}%`;
        }

        function removeBtn() {
            if (count === 0) {
                PrevBtn.style.display = 'none'
            } else if (count !== 0) {
                PrevBtn.style.display = 'block'
            }
            if (count === quizAll.length - 1) {
                nextBtn.style.display = 'none'
            } else if (count !== quizAll.length) {
                nextBtn.style.display = 'block'
            }
        }

        // UPGRADE FORM START

         
            

            
        
            

            // MASK PHONE

        
             
    }
// QUIZ THE END
})
;
