import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { InputContext } from "../App";
import MeaningList from "./MeaningList";
// import ExampleList from "./ExampleList";
import SynonymList from "./SynonymList";
import AntonymList from "./AntonymList";
axios.defaults.baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en";
const ResultList = () => {
    const { inputValue } = useContext(InputContext)
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const fetchData = async (param) => {
        try {
            setLoading(true)
            const res = await axios(`/${param}`)
            setResponse(res.data);
            setError(null)
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        if (inputValue.length) {
            fetchData(inputValue)
        }
    }, [inputValue]);



    if (loading) {
        return <h1 className="text-center mt-44 text-5xl text-dark-500">Loading...</h1>
    }
    if (error) {
        return <h1 className="text-center mt-44 text-5xl text-dark-500">No Definition Found 🤡</h1>
    }

    return (
        <>
            <div className="container mx-auto p-4 max-w-2xl">
                {response && (<div>
                    <h3 className=" text-2xl mt-4 capitalize">Meaning & definition</h3>
                    <MeaningList mean={response} />
                    {/* <h3 className="text-2xl mt-4 capitalize">example : </h3>
                    <ExampleList mean={response} /> */}
                    <h3 className="text-2xl mt-4 capitalize">synonym : </h3>
                    <SynonymList mean={response} />
                    <h3 className="text-2xl mt-4 capitalize">antonym : </h3>
                    <AntonymList mean={response} />
                </div>)}
            </div>
        </>
    )
}

export default ResultList
