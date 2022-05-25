import ContactsPage from "./pages/contacts/ContactsPage";
import MainPage from "./pages/mainPage/MainPage";

function App() {
    const users = [
        {
            name: "Zhenish",
            age: 16,
            position: "students"
        },
        {

            name: "Azamat",
            age: 16,
            position: "students"

        },
        {
            name: "umar",
            age: 16,
            position: "students"
        },
        {
            name: "Nursultan",
            age: 23,
            position: "teacher"
        }
    ]
    return (
        <div>

            <ContactsPage/>
            <MainPage users={users}/>
        </div>
    );
}

export default App;