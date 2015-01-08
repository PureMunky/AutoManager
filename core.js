var AutoManager = (function () {
    var that = {},
        // The bank of wisdom.
        sayings = [
            'How are you coming on that thing I asked about about earlier?',
            'I\'m going to need all hands on deck for this one.',
            'I know we\'re all very busy but we\'re going to have to find some wiggle room for this.',
            'Yea, I\'m gonna need you to come in on Saturday.',
            'You\'re just adding a new field to the form, it shouldn\'t impact the deadline.',
            'I really like that but what if we didn\'t do it that way.'
        ];

    // Assesses the situation and provides guidance.
    function getNewSaying() {
        var i = Math.floor(Math.random() * 12000) % sayings.length;
        
        return sayings[i];
    }

    // Executes the communication plan.
    function writeSaying(saying, author) {
        document.getElementById('outSaying').innerText = saying;
        document.getElementById('outAuthor').innerText = author;

    }

    // Bestows wisdom.
    that.AdviseMe = function () {
        writeSaying(getNewSaying(), 'AutoManager');
    };

    return that;
}());
