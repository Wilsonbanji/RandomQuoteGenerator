quotes =[
    'Be hopeful', 'ThE Secret of life is to have no fear','He that wait for the perfect time wait forever','Never lie to yourself','He that fail to plan,plan to fail'
]

 const quoteElement = document.getElementById('quote')
 //Functions of the code//
function generateQuote(){
   const newText= Math.floor(Math.random()*quotes.length)
   const newQuote=quotes[newText]
   
    quoteElement.innerHTML= newQuote;
}
