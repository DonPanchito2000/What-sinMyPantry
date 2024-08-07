// e11821aa0a2c44abb412274e71d1ba1c


const recipeContainer = document.querySelector('.recipe-container')
const searchBtn = document.querySelector('.search-btn')
const input = document.querySelector('#searchBar')
const apiKey = 'e11821aa0a2c44abb412274e71d1ba1c'; // Replace with your actual API key



const totalDiv = 0


async function fetchRecipe() {
    try {

        recipeContainer.innerHTML =''
     
        let engredient = input.value
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${(engredient)}&apiKey=${apiKey}`);
        
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
       
        
        let classCount =0
        // Ensure 'results' is present and is an array
        if (data.results && Array.isArray(data.results)) {
            data.results.forEach(recipe => {
                
                    const newDiv = document.createElement('div');
                   
                   
                    newDiv.setAttribute('class', `recipe ${classCount}`);
                    classCount++
                    recipeContainer.appendChild(newDiv);
    
                    const recipeImg = recipe.image;
                    newDiv.innerHTML = `<img src="${recipeImg}" width="100%" alt="${recipe.title}">`;

                    input.value = ''
              
                    newDiv.addEventListener('click', function() {
                        // Toggle the 'expanded' class
                        newDiv.classList.toggle('expanded');
                        
                        // Check if the 'expanded' class is now present
                        if (newDiv.classList.contains('expanded')) {
                            // Create and append the detailContainer if not already present
                            if (!newDiv.querySelector('.detail-container')) {
                                const detailContainer = document.createElement('div');
                                detailContainer.classList.add('detail-container');
                                newDiv.appendChild(detailContainer);

                                const recipeName = document.createElement('h2')
                                detailContainer.appendChild(recipeName)

                                recipeName.innerText =`${recipe.title}`
                            }
                        } else {
                            // Remove the detailContainer if it exists
                            const detailContainer = newDiv.querySelector('.detail-container');
                            if (detailContainer) {
                                newDiv.removeChild(detailContainer);
                            }
                        }
                    });
                    
                    
            })
        } else {
            console.error('Expected "results" to be an array but got:', data.results);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

// Example button click event listener to trigger fetchRecipe function
document.querySelector('.search-btn').addEventListener('click', fetchRecipe)





    // searchBtn.addEventListener('click', async function() {
    //     // Remove all child elements from recipeContainer
    //     while (recipeContainer.firstChild) {
    //         recipeContainer.removeChild(recipeContainer.firstChild);
    //     }
        
    //     // Fetch new recipes
    //     await fetchRecipe();
    // });
 

  
    
// searchBtn.addEventListener('click',function() {


//         const newDiv = document.createElement('div');
//         newDiv.setAttribute('class','recipe'); 
//         recipeContainer.appendChild(newDiv)
//         newDiv.innerHTML = `<img src="Chuck-norris.webp" width="100%">`

        
       
    
// })

  // const detailContainer = document.createElement('div')
                // newDiv.appendChild(detailContainer)
                // // Add click event listener to each recipe div
                // newDiv.addEventListener('click', () => {
                //     // Toggle the 'expanded' class on the clicked recipe div
                //     // newDiv.classList.toggle('expanded');

                //     if(newDiv.classList.container('expanded')){
                //         newDiv.classList.remove('expanded')
                //         detailContainer.classList.remove('visible')
                //         detailContainer.classList.add('hidden')
                //     }else{
                //         newDiv.classList.add('expanded')
                //         detailContainer.classList.remove('hidden')
                //         detailContainer.classList.add('visible')
                //     }
                // });




                // recipeData.results.forEach(recipe => {
                //     const newDiv = document.createElement('div');
                //     newDiv.setAttribute('class', 'recipe');
                //     recipeContainer.appendChild(newDiv);
    
                //     const recipeImg = recipe.image;
                //     newDiv.innerHTML = `<img src="${recipeImg}" width="100%" alt="${recipe.title}">`;
    
                  
                // });