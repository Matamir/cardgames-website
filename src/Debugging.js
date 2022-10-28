export const DEBUGGING = true

export function DEBUGGER(string) {
    if (DEBUGGING) {
        console.log(string)
    }
}