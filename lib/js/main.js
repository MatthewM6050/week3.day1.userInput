//Variables
const desiredTitle = document.querySelector('#title_input');
const mainTitle = document.querySelector('#main_title');
const story = document.querySelector('#story_result');
const submitButton = document.querySelector('#submit_button');
const form = document.querySelector('.form_container');
let storyResult;

//Updates title while typing in title line
desiredTitle.addEventListener("keyup", changeMainTitle);
function changeMainTitle()
{
    mainTitle.innerHTML = desiredTitle.value;
}

//Creates the story
submitButton.addEventListener('click', updateFields);
function updateFields()
{
    event.preventDefault();
    const adlibs = [
        document.querySelector('#noun'),
        document.querySelector('#verb'),
        document.querySelector('#adjective')
    ];
    
    console.log("After preventDefault")
    
    for(let item of adlibs)
    {
        if(!item.value)
        {
            alert("Please fill in all fields");
            console.log("empty")
        }
        else if(item.value)
        {
            if(item.id == 'noun')
            {
                storyResult = "Last night I ate " + item.value + ", ";
            }
            else if(item.id == 'verb')
            {
                storyResult += "and today I just had to " + item.value + ". ";
            }
            else if(item.id == 'adjective' && adlibs[0].value && adlibs[1].value)
            {
                storyResult += "What a " + item.value + " day!";
                form.remove();
                story.innerText = storyResult;
                console.log(storyResult);
            }
        }
    }
}