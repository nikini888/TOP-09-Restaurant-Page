const signs = ['(', ')', '-', ' ', ':']
const masks = document.querySelectorAll('.mask')

masks.forEach(input => {
    const pattern = input.dataset.pattern.split('')
    console.log(pattern);

    input.addEventListener('keypress', e => {
        e.preventDefault()
        check(e.key)
    })
    //test 555aa3555555
    //test 5555555555

    if (input.name === 'phone') {
        input.addEventListener('paste', e => {
            e.preventDefault()
            const paste = e.clipboardData.getData('text').replaceAll(' ', '').split('')
            paste.forEach((char, index) => {
                let currentRegex
                if (pattern[index] != '0' && pattern[index] != '#') return
                if (pattern[index] === '0') currentRegex = /\d/
                if (pattern[index] === '#') currentRegex = /[a-zA-Z]/
                if (!currentRegex.test(char)) {
                    paste.splice(index, 1)
                    if (!currentRegex.test(char)) {
                        paste.splice(index, 1)
                    }
                }
            })
            pattern.forEach((item, index) => {
                if (signs.includes(item)) {
                    paste.splice(index, 0, item)
                }
            })

            input.value = paste.join('').substring(0, pattern.length)
        })
    }

    input.addEventListener('keyup', e => {
        if (e.key !== 'Backspace') return
        removeCharacter()
    })

    function check(char) {
        if (signs.includes(pattern[input.value.length])) {
            input.value += pattern[input.value.length]
            if (signs.includes(pattern[input.value.length])) {
                check(pattern[input.value.length])
            }
        }
        let currentRegex
        if (pattern[input.value.length] != '0' && pattern[input.value.length] != '#') return
        if (pattern[input.value.length] === '0') {
            console.log(input.value.length, input.value, pattern[input.value.length], input.name)
            currentRegex = /\d/
            if (input.name === 'time') {
                currentRegex = timeRegex(input.value, input.value.length)
            }
        }
        if (pattern[input.value.length] === '#') currentRegex = /[a-zA-Z]/
        if (currentRegex.test(char)) input.value += char
    }

    function removeCharacter() {
        if (signs.includes(pattern[input.value.length - 1])) {
            input.value = input.value.slice(0, -1)
            if (signs.includes(pattern[input.value.length - 1])) {
                removeCharacter()
            }
        }

    }
    function timeRegex(value, length) {
        if (length === 0) {
            return /[0,1]/
        }
        if (length === 1) {
            const char = value.slice(-1)
            return /[0]/.test(char) ? /[5-9]/ : /[0,1]/
        }
        if (length === 3) {
            return /[0-6]/
        }
        return /\d/
    }
})

export { masks }