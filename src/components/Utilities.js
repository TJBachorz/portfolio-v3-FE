import ARCube from '../assets/AR-cube.jpg';

export const bioPageSkills = {
    Javascript: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
    Node: "https://logodix.com/logo/1764882.png",
    React: "https://cdn.worldvectorlogo.com/logos/react.svg",
    ReactNavigation: "https://reactnavigation.org/img/spiro.svg",
    Vue: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1024px-Vue.js_Logo_2.svg.png",
    Ruby: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/396px-Ruby_logo.svg.png",
    Rails: "https://pbs.twimg.com/media/CZGHPChUAAA3jqE.png",
    Python: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/220px-Python-logo-notext.svg.png",
    Django: "https://img.stackshare.io/service/994/4aGjtNQv.png",
    Postgres: "https://assets.ctfassets.net/k49d63tr8kcn/2PSwdyLfIIMqQomsok2Ea8/c8a3f648e592990e4bedfc4a0acbb312/icon-postgres.svg",
    Heroku: "https://s3.amazonaws.com/hackdesign/tools/app_images/000/000/037/icon_small/heroku-logo-6e6c2ed8be2ad02ac96455d53e4e7e43.png?1385326105",
    Firebase: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-512.png",
    AWS: "https://i.imgur.com/eeYUFCO.png",
    HTML: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
    CSS: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
}
export const ABCTech = {
    Javascript: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
    React: "https://cdn.worldvectorlogo.com/logos/react.svg",
    ReactNavigation: "https://reactnavigation.org/img/spiro.svg",
    Python: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/220px-Python-logo-notext.svg.png",
    Django: "https://img.stackshare.io/service/994/4aGjtNQv.png",
    Postgres: "https://assets.ctfassets.net/k49d63tr8kcn/2PSwdyLfIIMqQomsok2Ea8/c8a3f648e592990e4bedfc4a0acbb312/icon-postgres.svg",
}
export const epicBeerTech = {
    Javascript: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
    React: "https://cdn.worldvectorlogo.com/logos/react.svg",
    Ruby: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/396px-Ruby_logo.svg.png",
    Rails: "https://pbs.twimg.com/media/CZGHPChUAAA3jqE.png",
    Postgres: "https://assets.ctfassets.net/k49d63tr8kcn/2PSwdyLfIIMqQomsok2Ea8/c8a3f648e592990e4bedfc4a0acbb312/icon-postgres.svg",
}
export const looksyTech = {
    HTML: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
    CSS: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
    Javascript: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
    Node: "https://logodix.com/logo/1764882.png",
    Ruby: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/396px-Ruby_logo.svg.png",
    Rails: "https://pbs.twimg.com/media/CZGHPChUAAA3jqE.png",
    AWS: "https://i.imgur.com/eeYUFCO.png",
    Postgres: "https://assets.ctfassets.net/k49d63tr8kcn/2PSwdyLfIIMqQomsok2Ea8/c8a3f648e592990e4bedfc4a0acbb312/icon-postgres.svg",
    AR: ARCube
}

export const mailerURL = "https://personal-site-sendgrid-mailer.herokuapp.com"

export const renderTechImages = (techHash) => {
    const techEntries = Object.entries(techHash)
    return techEntries.map(techEntry => {
        const [tech, src] = techEntry
        return <img className="tech-used" key={tech} src={src} alt={tech}/>
    })
}

export const looksyBackupGIFS = ["https://j.gifs.com/ZYP52R.gif", "https://j.gifs.com/BNkzVN.gif"]

const playAudio = (audioFile, isMuted) => {
    return !isMuted ? audioFile.play() : null
}

export const onLoadEffects = (animShow, setAnimShow, audioFile, isMuted, timeout) => {
    return !animShow ? 
        setTimeout(() => {
            setAnimShow(!animShow)
            playAudio(audioFile, isMuted)
        }, timeout) 
        : null
}

