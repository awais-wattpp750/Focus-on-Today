
const inputFields = document.querySelectorAll('input');
const  chackbox = document.querySelectorAll('.chose-goal')
const errorShow   = document.querySelector('.error');
const progress_value = document.querySelector('.progress-value');





chackbox.forEach((click)=>{
      click.addEventListener('click', (e)=>{
        let allGoalsAded = [...inputFields].every((input)=>{   
            return input.value;     
        })
         if(allGoalsAded){
         click.parentElement.classList.toggle('completed');
         updateProgress();
            }else{
                errorShow.classList.add('show')
            }
    });
})


    inputFields.forEach((input)=>{

        input.addEventListener('focus', ()=>{
            errorShow.classList.remove('show')
        })
    })

    function updateProgress(){
         let completedGoals = document.querySelectorAll('.completed');
        progress_value.style.width = (completedGoals.length/3)*100 + "%"
        return completedGoals;}


// const firstGoal1 = document.querySelector('.goal1')
// const secondtGoal = document.querySelector('.goal2')
// const thirdGoal = document.querySelector('.goal3')
// const error = document.querySelector('.error');
// const progress_value = document.querySelector('.progress-value')



// // for ticking the goal after completed
// const firstcompleterGoal = document.querySelector('.chose1-goal');
// const secondcompleterGoal = document.querySelector('.chose2-goal');
// const thirdcompleterGoal = document.querySelector('.chose3-goal');

// // input 



//     firstcompleterGoal.addEventListener('click',(e)=>{
//             const firstinput = firstGoal1.querySelector('input');
//             if(firstinput.value.trim()!==""){
//             firstGoal1.classList.toggle('completed');
//             error.classList.remove('show');
//             updateProgress();
                
//             }else{
//                error.classList.add('show');
//                 console.log('pleae complete your task')
//             }
        

//     });
//         secondcompleterGoal.addEventListener('click',(e)=>{
//         const secondinput = secondtGoal.querySelector('input');
//          if(secondinput.value.trim()!==""){
//           secondtGoal.classList.toggle('completed')
//             error.classList.remove('show');
//           updateProgress();
//            error.classList.remove('show');

//             }else{
//                 error.classList.add('show');
//                 console.log('pleae complete your task')
//             }
//     });

//       thirdcompleterGoal.addEventListener('click',(e)=>{
//         const thirdinput = thirdGoal.querySelector('input');
//          if(thirdinput.value.trim()!==""){
//           thirdGoal.classList.toggle('completed')
//                 error.classList.remove('show');
//           updateProgress();
        
        
//             }else{
//                 error.classList.add('show');
//                 console.log('pleae complete your task')
//             }


            
//     });
   
   
    


  
// function updateProgress(){
//          let completedGoals = document.querySelectorAll('.completed');
//         progress_value.style.width = (completedGoals.length/3)*100 + "%"
//         return completedGoals;}
