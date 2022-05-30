
export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), // 123123213123435345
            date: new Date().toDateString(), // sat 23, julio 
            text: 'kskskskskskskskkskskaskakaskasksakkaskasksakaskasks',
            picture: null, // https://
        },
        {
            id: new Date().getTime() + 1000, // 123123213123435345
            date: new Date().toDateString(), // sat 23, julio 
            text: 'Laboris eu ea in irure excepteur proident.',
            picture: null, // https://
        },
        {
            id: new Date().getTime() + 2000, // 123123213123435345
            date: new Date().toDateString(), // sat 23, julio 
            text: 'Laboris eu ea in irure excepteur proident. Et Lorem aliqua ex cillum ad voluptate commodo sint velit do sit irure.',
            picture: null, // https://
        },
    ]
})