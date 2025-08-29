setTitle('GRAVEYARD TOOL')
setFooter('2025')
setCupheadProjects()
setButtons()
setAudio('cuphead')
setDiscord()
generateTable()
function setButtons() {
    let HTMLContent = ''
    words.forEach((col, colIndex) => {
        HTMLContent += `<div id='col${colIndex}'>`
        HTMLContent += `<img src='images/${colIndex}.png' class='container' style='height:${colIndex == 1 ? 90 : 70}px;${colIndex == 1 ? '' : 'padding-top:50px'}'>`
        col.forEach((word, wordIndex) => {
            const id = colIndex + '-' + wordIndex
            HTMLContent += `<div id='${id}' class='button graveyard' onclick="buttonClick('${id}','col${colIndex}','activeBanner');setIndex(${colIndex},${word.n})">${word.w}</div>`
        })
        HTMLContent += `</div>`
    })
    document.getElementById('buttons').innerHTML = HTMLContent
}
function setIndex(colIndex, index) {
    indices[colIndex] = index
    generateTable()
}
function generateTable() {
    let HTMLContent = ''
    HTMLContent += `
    <div id='table' style="
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 3px;
    width: 200px;
    height: 200px;
    ">
    `
    for (let i = 0; i < 9; i++) {
        let cellContent = ''
        let className = ''
        if (i == indices[0]) {
            cellContent = '2'
            className = 'second'
        } else if (i == indices[1]) {
            cellContent = '1'
            className = 'first'
        } else if (i == indices[2]) {
            cellContent = '3'
            className = 'third'
        }
        const style = `text-align:center;padding-top:21px;${i == 4 ? 'background-color:transparent' : ''}`
        HTMLContent += `<div class='${className}' style='${style}'>${cellContent}</div>`
    }
    HTMLContent += `</div>`
    document.getElementById('tableDiv').innerHTML = HTMLContent
}