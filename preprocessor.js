// updates the #output DOM element with a given string
function setOutput(string) {
    $('#output').text(string);
}

function removeStops(string) {
    let stopwords = [
        'a',
        'an',
        'the',
        'so',
        'very',
        'much'
    ];
    
    string = string.split(' ');
    for (i = 0; i < string.length; i++) {
        let test = string[i];
        test = test.toLowerCase().replace(/'\B|[^a-z'? ]/g, ``);
        if (stopwords.includes(test)) {
            string.splice(i, 1);
        }
    }
    string = string.join(' ');
    setOutput(string);
}

function stemString(string) {
    
    // List of letter categorizations (TODO: move this elsewhere, I'm sure we'll use it in other functions)
    let consonants = [
        'b', 
        'c',
        'd',
        'f',
        'g',
        'h',
        'j',
        'k',
        'l',
        'm',
        'n',
        'p',
        'q',
        'r',
        's',
        't',
        'v',
        'w',
        'x',
        'z'
    ];
    
    let vowels = [
        'a',
        'e',
        'i',
        'o',
        'u'
    ]
    
    let sometimes = [
        'y'
    ];
    
    string = string.split(' ');
    
    for (i = 0; i < string.length; i++) {
        let test = string[i];
        test = test.toLowerCase().replace(/'\B|[^a-z'? ]/g, ``);

        for (j = 0; j < test.length; j++) {
            let lastLetter = test.charAt(test.length - 1);
            let sExceptions = [
                "his",
                "this",
                "is",
                "was",
                "lens",
                "means",
                "species",
                "glasses",
                "cactus",
                "octopus",
                "bias",
                "alias",
                "iris",
                "its",
                "it's",
                "bus",
                "yes",
                "gas",
                "athletics",
                "acoustics",
                "linguistics",
                "billiards",
                "logistics",
                "diabetes",
                "news",
                "hypothesis",
                "virus",
                "mucus",
                "coronavirus"
            ];
            switch (lastLetter) {
                case 's':
                    if (sExceptions.includes(test)) {
                    } else if (test.charAt(test.length - 2) === 'y') {
                        if (test.charAt(test.length - 3) === 'e') {
                            string[i] = test.slice(0, -1);
                        }
                    } else if (test.charAt(test.length - 2) === 'e') {
                        if (test.charAt(test.length - 3) === 'i') {
                            if (test.length - 4 === 0) {
                                string[i] = test.slice(0, -1);
                            } else {
                                string[i] = test.slice(0, -3);
                                string[i] = string[i] + 'y';
                            }
                        } else {
                            string[i] = test.slice(0, -1);
                        }
                    } else if (vowels.includes(test.charAt(test.length - 2))) {
                        string[i] = test.slice(0, -1);
                    } else if (consonants.includes(test.charAt(test.length - 2))) {
                        if (test.charAt(test.length - 2) === 's') {
                        } else {
                            string[i] = test.slice(0, -1);
                        }
                    }
                break;
                case 'd':
                    if (test.length <= 3) {
                        
                    } else if (test.charAt(test.length - 2) === 'y') {
                        if (test.charAt(test.length - 3) === 'e') {
                            string[i] = test.slice(0, -2);
                        }
                    } else if (test.charAt(test.length - 2) === 'e') {
                        if (test.charAt(test.length - 3) === 'i') {
                            if (test.length - 4 === 0) {
                                string[i] = test.slice(0, -1);
                            } else {
                                string[i] = test.slice(0, -3);
                                string[i] = string[i] + 'y';
                            }
                        } else if (test.charAt(test.length - 3) === 'y') {
                            string[i] = test.slice(0, -1);
                        } else if (test.charAt(test.length - 3) === test.charAt(test.length - 4)) {   
                            if (test.charAt(test.length - 3) === 's') {
                                string[i] = test.slice(0, -2);
                            } else {
                                string[i] = test.slice(0, -3);
                            }
                        } else if (consonants.includes(test.charAt(test.length - 3))) {
                            if (vowels.includes(test.charAt(test.length - 4))) {
                                if (test.charAt(test.length - 5) === 'h') {
                                    if ((test.length - 5) < 2) {
                                        string[i] = test.slice(0, -1);
                                    } else {
                                        string[i] = test.slice(0, -2);
                                    }
                                } else if (vowels.includes(test.charAt(test.length - 5))) {
                                    string[i] = test.slice(0, -2);
                                } else {
                                    if (consonants.includes(test.charAt(test.length - 6))) {
                                        if (test.length - 6 > 0) {
                                            string[i] = test.slice(0, -2);
                                        } else {
                                            string[i] = test.slice(0, -1);
                                        }
                                    } else {
                                        string[i] = test.slice(0, -1);
                                    }
                                }
                            } else {
                                if (consonants.includes(test.charAt(test.length - 5))) {
                                    if ((test.length - 5) > 0) {
                                        string[i] = test.slice(0, -2);
                                    }
                                } else if (vowels.includes(test.charAt(test.length - 5))) {
                                    string[i] = test.slice(0, -2);
                                }
                            }
                        }
                    } 
                break;
                default:
                break;
            }
        }
    }
    string = string.join(' ');
    removeStops(string);
}

// Changes contractions to their long form, and ensures that preceding/following punctuation is maintained
function changeContractions(string) {
    
    // Divides into words by splitting on spaces
    string = string.split(' ');
    
    // for each word in the input
    for (i = 0; i < string.length; i++) {
        
        // iterate through programmed contractions
        for (j = 0; j < contractions.length; j++) {
            
            // normalizes word to ensure it matches the expected format
            let test = string[i];
            string[i].toLowerCase();
            test = test.toLowerCase().replace(/'\B|[^a-z'? ]/g, ``);
            
            // if a match is found in programmed contractions
            if (contractions[j][0] === test) {
                
                // following block checks for symbols and, based on its location in the word, either removes or maintains it
                // sets starting state
                let state = 0;
                
                // initializing array for symbols at the beginning of the word
                let beginning = [];
                
                // initializing array for symbols at the end of the word
                let trailing = [];
                
                // for each character in the word
                for (var k = 0; k < string[i].length; k++) {
                    
                    // if the character is a symbol
                    if (/[^\w\s]/gi.test(string[i].charAt(k))) {
                        
                        // if this is the first letter of the alphabet, advance to stage 1 (beginning symbols), adds to beginning array
                        if (k === 0) {
                            state = 1;
                            beginning.push(string[i].charAt(k));
                        
                        // if we're in state 1, keep adding to the beginning array, stay in stage 1
                        } else if (state === 1) {
                            beginning.push(string[i].charAt(k));
                            
                        // if it wasn't the first letter, check if it's surrounded by alphabet characters, advance to stage 2 (mid-word), doesn't record symbol
                        } else if (/^[a-zA-Z]+$/.test(string[i].charAt(k - 1)) && /^[a-zA-Z]+$/.test(string[i].charAt(k + 1))) {
                            state = 2;
                        
                        // if it's none of the previous, assume it's at the end, advance to state 3 (trailing symbols), adds to trailing array
                        } else {
                            state = 3;
                            trailing.push(string[i].charAt(k));
                        }
                        
                    // if the character is not a symbol, we assume we're in state 2 (mid-word)
                    } else {
                        state = 2;
                    }
                }
                
                // joins beginning and trailing symbols with the matching expanded contraction from our programmed contractions
                string[i] = beginning.join('') + contractions[j][1] + trailing.join('');
            }
        }
    }
    
    // puts the sentence back together, words separated by spaces again
    string = string.join(' ');
    stemString(string);
}

// replaces accented characters with their equivalent plain letter
function removeAccents(string) {
    
    // converts to lowercase, as that should be all we really need right now
    string = string.toLowerCase();
    string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    // passes over to changeContractions for further processing
    changeContractions(string);
}

$(document).ready(function () {
    $('#input').on('input', function() {
        
        // begins by sending string pulled from #input DOM element to remove accents
        removeAccents($('#input').val());
    });
});

// processing steps:
//   1. remove accented characters (removeAccents)
//   2. expand contractions to long form (changeContractions)
//   3. stemming words to a simple, but inaccurate form (stemString)
//   4. removing stopwords, like "the" or "and" (removeStops)

// Magic comment |
