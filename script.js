// Fisher-Yates shuffle from https://gist.github.com/smutnyleszek/9bbb7f75464fbbea87f0
function shuffle(array) {
    var m = array.length, t, i;
    // while there remain elements to shuffle
    while (m) {
        // pick a remaining element
        i = Math.floor(Math.random() * m--);
        // and swap it with the current element
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

$(function() {
    // get days
    // div & mod by 196
    // quotient: hash to get ordering
    // mod: access ordering
    // pick!

    var countries = new Array("China", "India", "U.S.", "Indonesia", "Brazil", "Pakistan", "Nigeria", "Bangladesh", "Russia", "Mexico", "Japan", "Ethiopia", "Philippines", "Egypt", "Vietnam", "DR Congo", "Germany", "Iran", "Turkey", "Thailand", "U.K.", "France", "Italy", "Tanzania", "South Africa", "Myanmar", "South Korea", "Kenya", "Colombia", "Spain", "Argentina", "Uganda", "Ukraine", "Algeria", "Sudan", "Iraq", "Poland", "Canada", "Afghanistan", "Morocco", "Saudi Arabia", "Peru", "Venezuela", "Uzbekistan", "Malaysia", "Angola", "Mozambique", "Nepal", "Ghana", "Yemen", "Madagascar", "North Korea", "Côte d'Ivoire", "Australia", "Cameroon", "Taiwan", "Niger", "Sri Lanka", "Burkina Faso", "Romania", "Malawi", "Mali", "Kazakhstan", "Syria", "Chile", "Zambia", "Guatemala", "Netherlands", "Zimbabwe", "Ecuador", "Senegal", "Cambodia", "Chad", "Somalia", "Guinea", "South Sudan", "Rwanda", "Tunisia", "Belgium", "Cuba", "Benin", "Burundi", "Bolivia", "Greece", "Haiti", "Dominican Republic", "Czech Republic", "Portugal", "Sweden", "Azerbaijan", "Jordan", "Hungary", "United Arab Emirates", "Belarus", "Honduras", "Tajikistan", "Serbia", "Austria", "Switzerland", "Israel", "Papua New Guinea", "Togo", "Sierra Leone", "Bulgaria", "Laos", "Paraguay", "Libya", "El Salvador", "Nicaragua", "Kyrgyzstan", "Lebanon", "Turkmenistan", "Singapore", "Denmark", "Finland", "Slovakia", "Congo", "Norway", "Eritrea", "State of Palestine", "Costa Rica", "Liberia", "Oman", "Ireland", "New Zealand", "Central African Republic", "Mauritania", "Kuwait", "Croatia", "Panama", "Moldova", "Georgia", "Bosnia & Herzegovina", "Uruguay", "Mongolia", "Albania", "Armenia", "Jamaica", "Lithuania", "Qatar", "Namibia", "Botswana", "Lesotho", "Gambia", "TFYR Macedonia", "Slovenia", "Gabon", "Latvia", "Guinea-Bissau", "Bahrain", "Swaziland", "Trinidad and Tobago", "Timor-Leste", "Equatorial Guinea", "Estonia", "Mauritius", "Cyprus", "Djibouti", "Fiji", "Comoros", "Bhutan", "Guyana", "Montenegro", "Solomon Islands", "Luxembourg", "Suriname", "Cabo Verde", "Maldives", "Brunei", "Malta", "Bahamas", "Belize", "Iceland", "Barbados", "Vanuatu", "Sao Tome & Principe", "Samoa", "Saint Lucia", "Kiribati", "St. Vincent & Grenadines", "Tonga", "Grenada", "Micronesia", "Antigua and Barbuda", "Seychelles", "Andorra", "Dominica", "Saint Kitts & Nevis", "Marshall Islands", "Monaco", "Liechtenstein", "San Marino", "Palau", "Nauru", "Tuvalu", "Holy See");

    var now = new Date();
    var fullDaysSinceEpoch = Math.floor(now/8.64e7 - 7/24.0);

    var quotient = parseInt(fullDaysSinceEpoch / 196);
    var mod = parseInt(fullDaysSinceEpoch % 196);
    
    Math.seedrandom(quotient);

    var shuffledCountries = shuffle(countries);

    var country = shuffledCountries[mod];

    $("#country").html(country);
});
