var myMusic = [
    {
        "artist" : "Billy Joel",
        "title" : "Piano Man",
        "release_year" : 1973,
        "formats" : [
            "CD",
            "8T",
            "LP"
        ],
        "gold" : true
    },
    {
        "artist" : "Beau Carnes",
        "title" : "Cereal Man",
        "release_year" : 2003,
        "formats" : [
            "Youtube Video",
        ],
        "gold" : true
    }
];

console.log(myMusic);

// accessing 2nd object
console.log(myMusic[1].formats[0]);