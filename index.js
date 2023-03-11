const nextQuotebtn = document.querySelector(".btn")
const quote = document.querySelector(".quote")
const author = document.querySelector(".author")
const soundbtn = document.querySelector(".sound")
const copybtn = document.querySelector(".copy")
const twitterbtn = document.querySelector(".twitter")


nextQuotebtn.addEventListener("click", randomQuote)


function randomQuote(){
    nextQuotebtn.classList.add("loading")
    nextQuotebtn.innerText = "Loading...."
    fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => {
            quote.innerText = data.content 
            author.innerText = `- ${data.author}`
            nextQuotebtn.innerText = "Next Quote"
            nextQuotebtn.classList.remove("loading")


        })
}

soundbtn.addEventListener("click", () =>{
    let U = new SpeechSynthesisUtterance(`${quote.innerText} by ${author.innerText}`)
    speechSynthesis.speak(U)
})

copybtn.addEventListener("click", () =>
{
    navigator.clipboard.writeText(`Quote- ${quote.innerText} Author- ${author.innerText}`)
})

twitterbtn.addEventListener("click", () =>
{
    let twitterUrl = `https://twitter.com/intent/tweet?url=${quote.innerText}`
    window.open(twitterUrl, "_blank")
})