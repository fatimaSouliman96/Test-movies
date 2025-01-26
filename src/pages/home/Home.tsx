import { BiMovie, BiSearch } from 'react-icons/bi'
import Counter from '../../components/counter/Counter'
import './home.css'
import { useEffect, useState } from 'react'
import DataTable from '../../components/Tabel/DataTabel'
import { Movie, MoviesColumns, MoviesRows } from '../../components/Tabel/data'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from "../../state/store";
import { fetchPosts } from '../../state/movies/moviesSlice'

export default function Home() {
    const dispatch = useDispatch<AppDispatch>();
    const { data } = useSelector((state: RootState) => state.movies);

    const [dataResult, setDataResult] = useState<Movie[]>(data)

    const [result, setResult] = useState<string>()

    const handleCahngeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setResult(e.target.value)

        let newData = dataResult.filter(ele => ele.name === e.target.value)

        setDataResult(newData)
        console.log(dataResult)
        if (dataResult.length == 0) {
            console.log(dataResult.length)
        }

    }
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

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div className="home" >
            <div className="input" >
                <BiSearch size={22} />
                <input type="search" value={result} onChange={e => handleCahngeSearch(e)} />
            </div>
            {!result && <div className='contener' >
                {
                    counters.map(ele => {
                        return <Counter color={ele.color} title={ele.title} count={ele.count} icon={ele.icon} />
                    })
                }

            </div>}
            {/* show search results */}
            {result && <div className='table'>
                {dataResult.length !== 0 ? <DataTable movies={true} columns={MoviesColumns} rows={dataResult ? dataResult : MoviesRows} /> : <p  > There are no results ... </p>}
            </div>}
        </div>
    )
}
