$(document).ready(() => {

    // Sets the default index for the slides

    let currentIndex = 0

    // Counts the number of items within the slideshow/carousel

    const totalItems = $('.carousel-item').length
    let slideInterval

    // Sets the breakpoint

    const breakpoint = 768


    // Function to slides to certain images via the index

    const slideToImage = (index) => {

        // Calculates the offset

        const offset = -index * 100 + "%"

        // Applies the transform with the offset value

        $('.carousel-container').css('transform', `translateX(${offset})`)

        // Updates the pagination of what index is active

        updatePagination(index)
    }


    // Function that updates the pagination indicators to reflect the active index

    const updatePagination = (index) => {

        // Highlights and dehighlights paginations

        $('.carousel-pagination').removeClass('bg-white/85 grow').addClass('bg-white/50')
            .eq(index).removeClass('bg-white/50').addClass('bg-white/85 grow')
    }


    // Function to determine the direction of the slides

    const navigateSlide = (direction) => {

        // Updates index

        currentIndex = (currentIndex + direction + totalItems) % totalItems

        // Slides to new index

        slideToImage(currentIndex)

        // Resets slide interval

        resetSlideInterval()
    }


    // Depending on the screen size resets the slide timing/interval

    const resetSlideInterval = () => {

        // Checks whether above the set breakpoint

        if (window.innerWidth >= breakpoint) {

            // Clears existing interval

            clearInterval(slideInterval)

            // Sets new interval

            slideInterval = setInterval(() => navigateSlide(1), 7500)
        } else {

            // Clears interval if below breakpoint

            clearInterval(slideInterval)
        }
    }


    // Event trigger for slide directions for prev and next images

    $('.next').click(() => navigateSlide(1))
    $('.prev').click(() => navigateSlide(-1))


    // Checks window size and adjusts the interval based on it

    const checkWindowSize = () => {
        window.innerWidth < breakpoint ? clearInterval(slideInterval) : resetSlideInterval()
    }


    // Checks initial specs

    checkWindowSize()
    $(window).resize(checkWindowSize)
    resetSlideInterval()
})