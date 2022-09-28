export const localStorageDefault = () => {
    if (localStorage.getItem("progress") === null || localStorage.getItem("progress") === "New game") 
        localStorage.setItem("progress", "New game")
}
export const autosave = (chapter) => {
    localStorage.setItem("progress", chapter)
} 
