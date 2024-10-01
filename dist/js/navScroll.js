$(document).ready(() => {
    let prevScrollPos = $(window).scrollTop()
    const navbar = $("nav")
    const navBg = $(".navBg")

    $(window).on('scroll', () => {
        const currentScrollPos = $(window).scrollTop()

        navbar.css('top', prevScrollPos > currentScrollPos ? '0' : '-6.5rem')

        navBg.toggleClass('opacity-100', currentScrollPos > $(window).height() - 88)
        navBg.toggleClass('opacity-0', currentScrollPos <= $(window).height() - 88)

        prevScrollPos = currentScrollPos
    })
})