import {prompt} from './cli'

export default async function () {
    try {
        const name = await prompt('whats your name?')
        const age = await prompt('how old are you?')
        console.log(`hi ${name} you are ${age} years old`)
        process.exit(0)
    } catch (e) {
        console.log(e)
    }
}