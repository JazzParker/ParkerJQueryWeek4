$(document).ready(() => {
    const $menuButton = $('.menu-button');
    const $navDropdown = $('#nav-dropdown');


    //show menu
    $menuButton.on('dblclicK', () => {
$navDropdown.show();
    })


//hide menu
    $navDropdown.on('mouseleave', () => {
        $navDropdown.hide();
    })
})
