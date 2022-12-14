import vacansiesReducer from "./vacansies-reducer"

let store = {
    _state: {
        vacansiesPage: {
            vacansies: [
                {
                    "id": "1",
                    "date": "06.09.2022",
                    "title": "Аналитик",
                    "salary": "100K",
                    "exp": "2",
                    "department" : "Департамент 1",
                    "headDepartment" : "Иван Иванович Иванов",
                    "text": "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. \n We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.",
                    
                },
                {
                    "id": "2",
                    "date": "03.02.2022",
                    "title": "Фронтенд-разработчик",
                    "salary": "120K",
                    "exp": "2",
                    "department" : "Департамент 2",
                    "headDepartment" : "Иван Иванович Иванов",
                    "text": "Quis occaecat duis aliqua reprehenderit excepteur nisi deserunt excepteur elit magna. Magna cillum anim veniam deserunt voluptate occaecat irure fugiat laboris proident. Tempor do magna deserunt cillum laborum cillum ut.\n\nEst sunt cupidatat in deserunt sit aliqua duis. Mollit consequat duis aliquip occaecat pariatur non do eiusmod dolore amet deserunt ullamco. Ea minim tempor exercitation do tempor nostrud dolor minim veniam laboris commodo ex duis. Do nostrud voluptate ullamco consequat anim tempor voluptate incididunt aliqua tempor.\n\nIn irure quis nostrud do. Labore laboris irure culpa reprehenderit pariatur laboris in commodo culpa enim cillum magna. Magna ipsum pariatur sunt in reprehenderit ipsum duis officia voluptate adipisicing ad officia. Duis est sint mollit amet laborum magna non quis nulla ipsum in veniam sit. Amet velit consequat esse esse ea. Ipsum non do ut cillum in adipisicing labore non commodo do laborum sunt.",
                    
                },
                {
                    "id": "3",
                    "date": "06.09.2022",
                    "title": "Бэкенд-разработчик",
                    "salary": "80K",
                    "exp": "12",
                    "department" : "Департамент 3",
                    "headDepartment" : "Иван Иванович Иванов",
                    "text": "Culpa dolor deserunt veniam irure amet officia excepteur labore nisi labore ad labore laborum aute. Ea irure sit exercitation ex. Aliquip dolore duis ullamco labore qui. Et anim irure laborum quis ipsum. Adipisicing culpa est ea velit veniam dolor nisi. Sit cupidatat velit commodo eu.\n\nUt nulla ut irure cillum irure sint sunt cupidatat tempor laboris incididunt elit occaecat fugiat. Reprehenderit enim cupidatat consectetur pariatur ad pariatur consequat veniam do fugiat Lorem laborum do velit. Nulla aute magna magna nisi officia et. Aute adipisicing eu eiusmod tempor exercitation sint non enim laboris dolor adipisicing.\n\nEa do sint pariatur voluptate ad culpa irure. Cillum pariatur deserunt fugiat elit. Exercitation labore amet deserunt magna. Velit veniam aute officia aliqua ipsum veniam pariatur. Aliquip ullamco fugiat officia non sunt ad consequat ipsum est esse commodo reprehenderit. Ad quis consectetur est exercitation fugiat eiusmod. Laborum reprehenderit esse qui irure.",
                    
                },
                {
                    "id": "4",
                    "date": "06.01.2022",
                    "title": "Слесарь",
                    "salary": "60K",
                    "exp": "5",
                    "department" : "Департамент 4",
                    "headDepartment" : "Иван Иванович Иванов",
                    "text": "Voluptate est officia pariatur tempor labore consequat consequat consectetur culpa enim. Amet laborum commodo in ullamco magna aliquip. Cupidatat veniam adipisicing labore irure nostrud sunt proident aute in. Sit Lorem consequat cillum enim id excepteur aliqua nostrud sint quis aute est est dolor. Sunt culpa est magna ad qui consequat exercitation. Enim sit ex do cupidatat laborum.\n\nOccaecat do tempor ex in dolor cupidatat do quis laboris anim. Et duis esse pariatur magna ex ipsum ut do ut id cillum. Nostrud fugiat sit minim ea. Nisi nulla sunt et et voluptate. Velit reprehenderit enim nulla mollit dolore excepteur Lorem do Lorem do cillum est qui. Ipsum mollit duis laboris incididunt non sit sunt proident. Aute voluptate id sunt aute proident officia.\n\nEnim ut nulla cillum officia cupidatat eiusmod amet laborum do labore id. Laborum in laboris aliquip anim consectetur magna reprehenderit consequat eiusmod esse Lorem consequat aliqua. Eiusmod voluptate mollit sint consectetur eu deserunt laboris ad et sunt nulla fugiat quis non. Dolor qui do cupidatat proident mollit amet sint pariatur non aliquip enim ex.",
                    
                },
                {
                    "id": "5",
                    "date": "06.09.2021",
                    "title": "Тимлид",
                    "salary": "200K",
                    "exp": "6",
                    "department" : "Департамент 5",
                    "headDepartment" : "Иван Иванович Иванов",
                    "text": "Ex sunt sunt aliqua reprehenderit aliqua occaecat. Minim anim commodo officia veniam proident aute cillum eu sunt aute nostrud. Laboris fugiat velit ut pariatur occaecat adipisicing pariatur occaecat. Duis sint enim et consectetur quis pariatur laborum excepteur. Ipsum aliquip qui laborum commodo consectetur do velit veniam occaecat. Ad nisi dolor cillum elit magna dolor voluptate ea. Enim in duis ea consequat sunt Lorem aute.\n\nEst elit sunt quis officia reprehenderit do elit commodo eiusmod esse voluptate. Sit ipsum commodo sint voluptate culpa labore elit magna ullamco nostrud. Laboris magna magna anim labore mollit irure voluptate. Aute non magna aliqua aliqua sunt. Velit mollit consectetur aliqua id tempor ut. Tempor cupidatat aliquip excepteur occaecat incididunt nulla Lorem sint.\n\nNon commodo anim deserunt in et aliquip incididunt ut consectetur sunt esse commodo deserunt et. Tempor fugiat laboris cillum laboris labore. Deserunt quis ad do labore amet culpa officia. Esse et officia nostrud tempor occaecat officia anim incididunt amet sunt excepteur Lorem. Aute occaecat magna velit nisi sit anim consequat velit qui pariatur. Esse incididunt id officia aliqua anim ut et.",
                    
                },
                
            ],
            newVacansie: [
                {
                    newVacTitle: '',
                    newVacSalery: '',
                    newVacExp: '',
                    newVacText: ''
                }
            ]
        }
        
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('yep')
    },
    
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.vacansiesPage = vacansiesReducer(this._state.vacansiesPage, action)
        this._callSubscriber(this._state);
        
    }
}



window.store = store
export default store;