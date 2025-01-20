import { companies } from './data';

const input = document.querySelector<HTMLInputElement>('#render-companies')
const card = document.querySelector<HTMLDivElement>('#companies-container')
const submit = document.querySelector<HTMLInputElement>('#submit')

if(!input || !card || !submit){
    throw new Error ('it didnt work')
}


const findSearchTerm = () => {
        const searchTerm = input.value
    const answerArr = companies.filter(e => {
        if(!e) throw new Error('no object')
        return e.name === searchTerm || e.industry === searchTerm
    })
    const answersStringArr = answerArr.map(e => {
        return Object.values(e).join(' ')
    })
    return card.innerText = answersStringArr.join('\n')
}

// const handleClick = ((event: Event) => {
//     // const target = event.currentTarget as HTMLButtonElement;
//     // card.innerText = companies.map(e => {
//     //     console.log(Object.values(e).toString())
//     //     return Object.values(e).toString()
//     // })
//     findSearchTerm()
// })
findSearchTerm()

submit.addEventListener('click', findSearchTerm)

