export default function auth() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             resolve({
              name:'Bolaji Adeyemi',
              avatar:'https://secure.gravatar.com/avatar/ef114bf91fce8490912a9d6ea8e911b2',
              uid:'bolajiadeyemi'
             })
        }, 2000)
    })
}