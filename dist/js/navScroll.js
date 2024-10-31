$(document).ready(() => {
    let prevScrollPos = $(window).scrollTop()
    const navbar = $("nav")
    const hamburger = $(".hamburger")
    const body = $("body")
    let curtainOpen = false

    $(window).on('scroll', () => {
        const currentScrollPos = $(window).scrollTop()

        navbar.css('top', prevScrollPos > currentScrollPos ? '0' : '-6.5rem')

        navbar.toggleClass('bg-black', currentScrollPos > $(window).height() - 88)

        prevScrollPos = currentScrollPos
    })

    hamburger.on("click", () => {
        const currentScrollPos = $(window).scrollTop()
        if (curtainOpen) {
            navbar.removeClass('h-screen')
            if (currentScrollPos < $(window).height() - 88) {
                navbar.removeClass('bg-black')
            }
        } else {
            navbar.addClass('bg-black h-screen')
        }

        if ($(window).width() <= 1024 && navbar.hasClass('h-screen')) {
            body.addClass('overflow-y-hidden')
        } else {
            body.removeClass('overflow-y-hidden')
        }

        curtainOpen = !curtainOpen
    })
})