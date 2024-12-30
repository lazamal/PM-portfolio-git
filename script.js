// creating the header component

let screenWidth = screen.availWidth
console.log(screenWidth)

const headerDiv = document.createElement('header')
headerDiv.className = 'main-header'
headerDiv.id = 'header'
headerDiv.innerHTML = `<nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="#about">About</a></li>
                <div id="products-container">
               <button id="products"><a href="" >Products</a></button>
                        <div class="dropdown-content">
                            <a href="Products1.html">
                                Hachaluz League
                                </a> 
                                <a href="Products2.html">
                                Youth Movement CMS system
                                </a>
                         
                         </div>
                </div>
                <li><a href="articles.html">Articles</a></li>
                <li><a href="contact.html">Contact</a></li>
               
            
            </ul>
        </nav>
            <div class="logo"></div> `

// creating the footer component

const footerDiv = document.createElement('footer')
footerDiv.innerHTML = ` <h2>Get in Touch</h2>
            <p>Let's build something great together.</p>
            <a href="contact.html" class="btn" style="border:none; text-decoration:none;">Email Me</a>
            <a href="https://www.linkedin.com/in/dor-lazarov-65601287/" style="border:none; text-decoration:none;"
                class="btn">LinkedIn</a>`

// inserting the header and footer components

document.body.prepend(headerDiv)
document.body.append(footerDiv)

// checking the window size

function checkWindow() {
    screenWidth = screen.availWidth
    if (screenWidth > 900) {
        console.log('desktop')
    }
    if (screenWidth <= 900) {
        console.log('mobile')
    }
}
window.onresize = checkWindow

// creating the responsive menu
const hamMenu = document.createElement('nav')
hamMenu.className = 'ham-menu'
