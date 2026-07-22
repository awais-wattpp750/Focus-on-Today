
const inputFields = document.querySelectorAll('input');
const  chackbox = document.querySelectorAll('.chose-goal')
const errorShow   = document.querySelector('.error');
const progress_value = document.querySelector('.progress-value');
const btn = document.querySelector('.button');
const show_quotes = document.querySelector('.show-quotes');
//  all   quaotes store in quotes
    const quotes = ['Raise the bar by completing your goals!', 
                    'well begun is half done!', 
                    'Just a step away, keep going!', 
                    'who! you just completed all the goals, time for chill'
                    ]
const allgoals = JSON.parse(localStorage.getItem("allgoals")) || {};
chackbox.forEach((click)=>{

      click.addEventListener('click', (e)=>{

    
        let allGoalsAded = [...inputFields].every((input)=>{   
            return input.value;     
        })
        
       
         if(allGoalsAded){
    
    click.parentElement.classList.toggle('completed');
    let completedCGoals= updateProgress();
        show_quotes.textContent = quotes[completedCGoals];
         const inputAccess = click.nextElementSibling;
          allgoals[inputAccess.id].prog_width = progress_value.style.width
         allgoals[inputAccess.id].completed = ! allgoals[inputAccess.id].completed;
         inputAccess.readOnly = allgoals[inputAccess.id].completed;
         localStorage.setItem('allgoals', JSON.stringify(allgoals));

            }
            else{
                errorShow.classList.add('show')
            }
    });
})


    inputFields.forEach((input)=>{
       
        if(allgoals[input.id]?.name){    
        input.value = allgoals[input.id].name;
        }
        if(allgoals[input.id]?.completed){
            input.parentElement.classList.add('completed')
            input.readOnly = true
            getprogressVluefromLocalStorage()
        }
        if(allgoals[input.id]?.completed){
        const completedGoals = document.querySelectorAll('.completed')
        const arrayCompletedGoals = [...completedGoals].length;
        show_quotes.textContent = quotes[arrayCompletedGoals];

        }

       


        input.addEventListener('focus', ()=>{
            errorShow.classList.remove('show')
           
        })

       
        
        input.addEventListener('input', (e)=>{
            console.log('input type')
            allgoals[input.id]={
            'name': input.value,
            'completed':allgoals[input.id]?.completed ?? false,
            'prog_width': progress_value.style.width
           }
            // allgoals[input.id]=input.value
            localStorage.setItem('allgoals', JSON.stringify(allgoals));
        });


        
    })

       function getprogressVluefromLocalStorage(){
        let completedGoals = document.querySelectorAll('.completed');
        const arrray = [...inputFields] // this is just for length 
             progress_value.style.width = (completedGoals.length/arrray.length)*100 + "%"
       }
    function updateProgress(){
         let completedGoals = document.querySelectorAll('.completed');
        const arrray = [...inputFields] // this is just for length 
        progress_value.style.width = (completedGoals.length/arrray.length)*100 + "%"
        return completedGoals.length
        ;}

        
// getprogressVluefromLocalStorage()
        //  for local storage 

        // function storeinLocalStorage(innput){
        

        //     const nodeArray = [...innput];
        //     // console.log(nodeArray.length)
        //     for(const i of nodeArray){

        //     taskk.push(i.value);
        //     // taskk.push(completeTastk);
        //     localStorage.setItem('taskk' ,JSON.stringify(taskk))
        //     }
            
            
         
        // }       

        // btn.addEventListener('click', ()=>{
        //     console.log('click')
        //     storeinLocalStorage(inputFields)
        // })

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
