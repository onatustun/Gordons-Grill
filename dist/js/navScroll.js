$(document).ready(() => {
    let prevScrollPos = $(window).scrollTop()
    const navbar = $("nav")

    $(window).on('scroll', () => {
        const currentScrollPos = $(this).scrollTop()

        navbar.css('top', prevScrollPos > currentScrollPos ? '0' : '-6.5rem')

        navbar.toggleClass("bg-black", currentScrollPos > $(window).height() - 88)

        prevScrollPos = currentScrollPos
    })
})