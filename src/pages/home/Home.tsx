import { BiMovie, BiSearch } from 'react-icons/bi'
import Counter from '../../components/counter/Counter'
import './home.css'

export default function Home() {

    const counters = [
        {
            title: "Movies",
            icon: <BiMovie size={70} />,
            count: 100,
            color: "#2C74B3"
        },
        {
            title: "Most viewed",
            icon: <BiMovie size={70} />,
            count: 50,
            color: "#205295"
        },
        {
            title: "Top rated movies",
            icon: <BiMovie size={70} />,
            count: 10,
            color: "#144272"
        },
    ]

    return (
        <div className="home" >
            <div className="input" >
                <BiSearch size={22} />
                <input type="search" />
            </div>
            <div className='contener' >
                {
                    counters.map(ele => {
                        return <Counter  color={ele.color} title={ele.title} count={ele.count} icon={ele.icon} />
                    })
                }

            </div>
        </div>
    )
}
