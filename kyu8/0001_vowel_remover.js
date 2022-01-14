let shortcut = word => word.split('').filter(ch => !['a', 'e', 'i', 'o', 'u'].includes(ch)).join('')
console.log(shortcut("hello"));