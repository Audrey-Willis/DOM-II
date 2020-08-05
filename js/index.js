
 
 


 /* 1 */ 
 let navBarAnchors = document.querySelector('.nav');
 
 navBarAnchors.addEventListener('mouseover', (event) => {
     event.target.style.fontSize = '2rem'
     event.target.style.color = 'darkturquoise'
    
 
});


/* 2 */
 navBarAnchors.addEventListener('mouseout',(event) => {
     event.target.style.fontSize = '1.6rem'
     event.target.style.color = 'black'
   
 });


/* 3 */
navBarAnchors.addEventListener('click', (event) => {
    event.target.style.color = 'hotpink'
    event.stopPropagation();

})

/* 4 (prevent default) */
 navBarAnchors.addEventListener('click', (event) => {
     event.preventDefault();
 })

/* 5 */
let logoHover = document.querySelector('.nav-container .logo-heading');

logoHover.addEventListener('mouseenter', (event) => {
    event.target.style.fontSize = '6rem'
    event.target.style.color = 'hotpink'
});

/* 6 */
logoHover.addEventListener('mouseleave',(event) => {
    event.target.style.fontSize = '4rem'
    event.target.style.color = 'black'
  
});

/* 7 */
let topImageTransform = document.querySelector('.intro img');

topImageTransform.addEventListener('mouseover', (event) => {
    event.target.style.borderRadius = '50px'
    event.target.style.margin = '2%'
})

/* 8 */
topImageTransform.addEventListener('mouseout', (event) => {
    event.target.style.borderRadius = '0%'
    event.target.style.margin = '0%'
});

/* 9 */
topImageTransform.addEventListener('click', (event) => {
    event.target.src = 'https://picsum.photos/id/183/1000/400'
})

/* 10 */ 
topImageTransform.addEventListener('dblclick', (event) => {
    event.target.src = "https://live.staticflickr.com/65535/50190275238_e722fe9115_o.jpg"
})


/* 11 */
let bodyBackgroundColor = document.querySelector('body');
bodyBackgroundColor.addEventListener('keydown',(event) => {
    if(event.key === 'Enter'){
        event.target.style.backgroundColor = 'turquoise'
    }
});

/* 12 */
bodyBackgroundColor.addEventListener('keyup', (event) => {
    if(event.key === 'Enter'){
        event.target.style.backgroundColor = 'white'
    }
});

/* 13 */
let bodyText = document.querySelector('body');
 bodyText.addEventListener('click', (event) => {
     event.target.style.color = 'green'
    
     
 })

 /* 14 stop propagation*/
 navBarAnchors.addEventListener('click', (event) => {
    event.target.style.color = 'hotpink'
    event.stopPropagation();

})
 

