module.exports = {
    save: function(message) {
        $('body').append('<h2>hi from logger</h2>')
        console.log('Saved')
    }
}