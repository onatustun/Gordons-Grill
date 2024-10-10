$(document).ready(() => {
    let currentIndex = 0
    const totalItems = $('.carousel-item').length
    let slideInterval
    const breakpoint = 768

    const slideToImage = (index) => {
        const offset = -index * 100 + "%"
        $('.carousel-container').css('transform', `translateX(${offset})`)
        updatePagination(index)
    }

    const updatePagination = (index) => {
        $('.carousel-pagination').removeClass('bg-white/85 grow').addClass('bg-white/50')
            .eq(index).removeClass('bg-white/50').addClass('bg-white/85 grow')
    }

    const navigateSlide = (direction) => {
        currentIndex = (currentIndex + direction + totalItems) % totalItems
        slideToImage(currentIndex)
        resetSlideInterval()
    }

    const resetSlideInterval = () => {
        if (window.innerWidth >= breakpoint) {
            clearInterval(slideInterval)
            slideInterval = setInterval(() => navigateSlide(1), 7500)
        } else {
            clearInterval(slideInterval)
        }
    }

    $('.next').click(() => navigateSlide(1))
    $('.prev').click(() => navigateSlide(-1))

    const checkWindowSize = () => {
        window.innerWidth < breakpoint ? clearInterval(slideInterval) : resetSlideInterval()
    }

    checkWindowSize()
    $(window).resize(checkWindowSize)
    resetSlideInterval()
})