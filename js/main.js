const themeLibrary = [
    {
        fontFamily: "'Whisper', cursive ",
        backgroundImgUrl: 'https://wallpapercave.com/wp/wp2757868.gif',
        year:5055,
        Discription:"Pixel art era"
    },
    {
        fontFamily: "'Whisper', cursive ",
        backgroundImgUrl: 'https://wallpapercave.com/wp/wp2239808.gif',
        year:"BC-1508",
        Discription:" Evolution - insects"
    },
    {
        fontFamily: "'Whisper', cursive ",
        backgroundImgUrl: 'https://wallpapercave.com/wp/wp2757874.gif',
        year:"1985",
        Discription:"First game was invented"
    },
    {   
        name:"futurecity",
        fontFamily: "'Whisper', cursive ",
        backgroundImgUrl: 'https://wallpapercave.com/wp/wp2757834.gif',
        year:5055,
        Discription:"Man colonized othrer planets -- thriving moon society"
    },

    {   
        name:"mario",
        fontFamily: "'Whisper', cursive ",
        backgroundImgUrl: 'https://wallpapercave.com/wp/wp2736652.gif',
        year:5055,
        Discription:"Mario found"
    },
    {
        name:"win7",
        fontFamily: "'Whisper', cursive ",
        backgroundImgUrl: 'https://wallpapercave.com/dwp1x/wp2757859.gif',
        year:5055,
        Discription:"Windows 7 made 2012"
    },

    {
        name:"iluminati",
        fontFamily: "'Whisper', cursive ",
        backgroundImgUrl: 'https://wallpapercave.com/dwp1x/wp2758186.gif',
        year:5055,
        Discription:"iluminati founded"
    },

    {
        name:"blueprint",
        fontFamily: "'Whisper', cursive ",
        backgroundImgUrl: 'https://wallpapercave.com/wp/wp7827486.jpg',
        year:5055,
        Discription:"industrial revolution "
    },

];

const sections = [0,1,2];

const handleSectionChange =(from , to )=>{

    // const mountedSec = [from,to];
    // const updatableSec = sections.filter(section => !mountedSec.includes(section))
    const randomTheme = themeLibrary[Math.floor(Math.random() * themeLibrary.length)];

    renderSection(randomTheme, from );
}


const renderSection =(theme , secIndex )=>{

    console.log('theme' , theme);
    console.log(secIndex)

    const section = document.getElementById(secIndex.toString());
    section.style.background = `url(${theme.backgroundImgUrl})`;
    section.style.fontFamily = theme.fontFamily;
    
    document.getElementById(`b${secIndex}`).innerText = theme.Discription;

}