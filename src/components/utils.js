export const unique = (array, propertyName) => {
    return array.filter(
        (e, i) =>
            array.findIndex(a => a[propertyName] === e[propertyName]) === i
    )
}
