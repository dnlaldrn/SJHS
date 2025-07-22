     document.querySelector('.menubutton').addEventListener("click", ()=>{
            document.querySelector('.sidebar').style.display = "flex";
            document.querySelector('.homeSection').style.display = "none";
            document.querySelector('.strandSection').style.display = "none";
            document.querySelector('.featured-section').style.display = "none";
            document.querySelector('.enrollment-section').style.display = "none";
             document.querySelector('.contact-section').style.display = "none";


        })
        document.querySelector('.hideButton').addEventListener("click", (event)=>{
            event.preventDefault();
            document.querySelector('.sidebar').style.display = "none";
        })

        document.querySelector('.send-button').addEventListener("click", (event)=>{
            alert('This button is undermaintenance')
            event.preventDefault();

        })
    
