import Navbar from "./components/navbar";
import Travel from "./components/Travel";

import data from "./data";

export default function App() {
    const travels = data.map(item => {
        return (
            <Travel key={item.id} data={item} />
        )
    })

    return (
        <div>
            <Navbar />
            {travels}
        </div>
    )
}