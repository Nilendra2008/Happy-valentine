document.addEventListener("DOMContentLoaded", () => {
  const landingPage = document.getElementById("landing-page")
  const surpriseSection = document.getElementById("surprise-section")
  const mainSection = document.getElementById("main-section")
  const surpriseButton = document.getElementById("surprise-button")
  const envelope = document.getElementById("envelope")
  const letter = document.getElementById("letter")
  const backgroundMusic = document.getElementById("background-music")
  const poem = document.getElementById("poem")
  const poemLines = poem.querySelectorAll("p")

  // Create floating hearts
  function createHeart() {
    const heart = document.createElement("div")
    heart.classList.add("heart")
    heart.style.left = Math.random() * 100 + "vw"
    heart.style.animationDuration = Math.random() * 5 + 10 + "s"
    heart.style.opacity = Math.random() * 0.5 + 0.5 // Add varying opacity
    document.body.appendChild(heart)

    setTimeout(() => {
      heart.remove()
    }, 15000)
  }

  setInterval(createHeart, 500)

  // Play background music
  backgroundMusic.play()

  // Surprise button click event
  surpriseButton.addEventListener("click", () => {
    landingPage.classList.add("hidden")
    surpriseSection.classList.remove("hidden")
    envelope.scrollIntoView({ behavior: "smooth" })
  })

  // Envelope click event
  envelope.addEventListener("click", () => {
    envelope.classList.add("open")
    setTimeout(() => {
      letter.classList.remove("hidden")
      letter.classList.add("visible")
    }, 500)

    setTimeout(() => {
      surpriseSection.classList.add("hidden")
      mainSection.classList.remove("hidden")
      mainSection.scrollIntoView({ behavior: "smooth" })
      startTimer()
      animatePoem()
    }, 5000)
  })

  // Add touch event for envelope on mobile
  envelope.addEventListener("touchstart", (e) => {
    e.preventDefault() // Prevent default touch behavior
    envelope.click() // Trigger the click event
  })

  // Timer function
  function startTimer() {
    const startDate = new Date("2023-02-14").getTime() // Change this to your relationship start date
    const timerElement = document.getElementById("timer")

    function updateTimer() {
      const now = new Date().getTime()
      const difference = now - startDate

      const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365))
      const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30))
      const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      timerElement.innerHTML = `${years}y ${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`
    }

    updateTimer()
    setInterval(updateTimer, 1000)
  }

  // Animate poem
  function animatePoem() {
    poemLines.forEach((line, index) => {
      setTimeout(() => {
        line.classList.add("visible")
      }, index * 2000)
    })
  }
})

