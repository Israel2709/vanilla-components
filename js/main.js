$('.checkable-option label').click( event => {
    let selection = $(event.target).text()
    console.log( selection )
    $(event.target).closest('.dropdown').find('#date-dropdown').text(selection)
})