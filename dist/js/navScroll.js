$(document).ready(() => {
    let prevScrollPos = $(window).scrollTop()
    const navbar = $("nav")
    const navBg = $(".navBg")

    $(window).on('scroll', () => {
        const currentScrollPos = $(window).scrollTop()

        navbar.css('top', prevScrollPos > currentScrollPos ? '0' : '-6.5rem')

        navbar.toggleClass('bg-black', currentScrollPos > $(window).height() - 88)
        navbar.toggleClass('bg-none', currentScrollPos <= $(window).height() - 88)

        prevScrollPos = currentScrollPos
    })
})