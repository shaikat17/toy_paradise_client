export const changeTitle = title => {
    if(title === '/') {
        title = "Toy Paradise"
    } else {
        const tlt = title.split('/')[1]
        title = `Toy Paradise || ${tlt.toUpperCase()}`
    }
    document.title = title
}