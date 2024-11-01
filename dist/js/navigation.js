$(document).ready(() => {
    let prevScrollPos = $(window).scrollTop()
    const navbar = $("nav")
    const hamburger = $(".hamburger")
    const body = $("body")
    let curtainOpen = false

    $(window).on('scroll', () => {
        const currentScrollPos = $(window).scrollTop()

        navbar.toggleClass('top-0', prevScrollPos > currentScrollPos).toggleClass('-top-26', !(prevScrollPos > currentScrollPos))

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

        body.toggleClass('overflow-y-hidden', $(window).width() < 768 && navbar.hasClass('h-screen'))

        curtainOpen = !curtainOpen
    })

    $(window).on('resize', () => {
        const currentScrollPos = $(window).scrollTop()

        if ($(window).width() >= 768 && curtainOpen) {
            navbar.removeClass('h-screen')
            if (currentScrollPos < $(window).height() - 88) {
                navbar.removeClass('bg-black')
            }
            body.removeClass('overflow-y-hidden')
            curtainOpen = false
        }
    })
})