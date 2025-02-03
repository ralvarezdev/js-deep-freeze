// DeepFreeze is a function that takes an object and recursively freezes it and all of its properties.
export default function DeepFreeze(obj) {
    Object.keys(obj).forEach(prop => {
        if (typeof obj[prop] === 'object' && !Object.isFrozen(obj[prop]))
            DeepFreeze(obj[prop])
    })
    return Object.freeze(obj)
}