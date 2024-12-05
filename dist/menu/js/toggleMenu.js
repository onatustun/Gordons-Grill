$(document).ready(function () {
    const pages = $('.page')
    const pageButtons = $('.page-button')

    let activePage = 0
    pageButtons.first().addClass('underline decoration-wavy decoration-1 underline-offset-2 md:decoration-2 md:underline-offset-4')

    function switchPage(oldPage, newPage) {
        pages.eq(oldPage).fadeOut(175, function () {
            pages.eq(newPage).fadeIn(200).css('display', 'flex')
        })
    }

    pageButtons.click(function () {
        const newPage = $(this).data('page-index')
        if (activePage !== newPage) {
            pageButtons.removeClass('underline decoration-wavy decoration-1 underline-offset-2 md:decoration-2 md:underline-offset-4')

            $(this).addClass('underline decoration-wavy decoration-1 underline-offset-2 md:decoration-2 md:underline-offset-4')

            switchPage(activePage, newPage)
            activePage = newPage
        }
    })
})