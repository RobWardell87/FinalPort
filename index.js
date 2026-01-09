// template_0dp4dej

// service_q6va64a

// EwyPtR-97yjwO8yhC

function contact(event) {
    event.preventDefault();
     const loading = document.querySelector(".modal__overlay--loading")
    const success = document.querySelector(".modal__overlay--success")
    loading.classList += " .modal__overlay--visible"
    emailjs
        .sendForm(
           "service_q6va64a",
           "template_0dp4dej",
           event.target,
           "EwyPtR-97yjwO8yhC"
        ).then(() => {
            loading.classList.remove("modal__overlay--visible")
            success.classList += " modal__overlay--visible"
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible")
            alert(
                "The email service is temporarily unavailable. Please feel free to contact me directly at r.wardell1987@gmail.com"
            )
        })
}