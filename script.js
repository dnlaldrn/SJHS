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
             document.querySelector('.homeSection').style.display = "block";
             document.querySelector('.strandSection').style.display = "block";
            document.querySelector('.featured-section').style.display = "block";
            document.querySelector('.enrollment-section').style.display = "block";
             document.querySelector('.contact-section').style.display = "block";

        })

        document.querySelector('.send-button').addEventListener("click", (event)=>{
            alert('This button is undermaintenance')
            event.preventDefault();

        })
        
        document.querySelector('.home').addEventListener("click", ()=>{
            document.querySelector('.sidebar').style.display = "none";
            document.querySelector('.homeSection').style.display = "block";
             document.querySelector('.strandSection').style.display = "block";
            document.querySelector('.featured-section').style.display = "block";
            document.querySelector('.enrollment-section').style.display = "block";
             document.querySelector('.contact-section').style.display = "block";


        })

              document.querySelector('.aboutus').addEventListener("click", ()=>{
            document.querySelector('.sidebar').style.display = "none";
            document.querySelector('.homeSection').style.display = "block";
             document.querySelector('.strandSection').style.display = "block";
            document.querySelector('.featured-section').style.display = "block";
            document.querySelector('.enrollment-section').style.display = "block";
             document.querySelector('.contact-section').style.display = "block";


        })
    
              document.querySelector('.strandsoffered').addEventListener("click", ()=>{
            document.querySelector('.sidebar').style.display = "none";
            document.querySelector('.homeSection').style.display = "block";
             document.querySelector('.strandSection').style.display = "block";
            document.querySelector('.featured-section').style.display = "block";
            document.querySelector('.enrollment-section').style.display = "block";
             document.querySelector('.contact-section').style.display = "block";


        })
    

              document.querySelector('.enroll').addEventListener("click", ()=>{
            document.querySelector('.sidebar').style.display = "none";
            document.querySelector('.homeSection').style.display = "block";
             document.querySelector('.strandSection').style.display = "block";
            document.querySelector('.featured-section').style.display = "block";
            document.querySelector('.enrollment-section').style.display = "block";
             document.querySelector('.contact-section').style.display = "block";


        })
    

              document.querySelector('.contactus').addEventListener("click", ()=>{
            document.querySelector('.sidebar').style.display = "none";
            document.querySelector('.homeSection').style.display = "block";
             document.querySelector('.strandSection').style.display = "block";
            document.querySelector('.featured-section').style.display = "block";
            document.querySelector('.enrollment-section').style.display = "block";
             document.querySelector('.contact-section').style.display = "block";


        })
    
    
