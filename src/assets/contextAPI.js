import { createContext, useEffect, useState } from "react";
import { fetchDatafromAPI, searchVideoDetails } from "./fetchApi";

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [feedData, setfeedData] = useState([]);
    const [searchResult, setsearchResult] = useState(false);
    const [selectedCategories, setselectedCategories] = useState("new");
    const [videoID, setvideoID] = useState();
    const [videoData, setvideoData] = useState([]);


    useEffect(() => {
        const data = fetchDatafromAPI(selectedCategories);
        data.then((data) => {
            setfeedData(data.items)
        });
    }, [selectedCategories])

    useEffect(() => {
        const data = searchVideoDetails(videoID);
        data.then((data)=>{
            setvideoData(data.items);
        })
    }, [videoID])

    const contextValues = {
        loading,
        setLoading,
        feedData,
        searchResult,
        setsearchResult,
        selectedCategories,
        setselectedCategories,
        videoData,
        setvideoData,
        videoID,
        setvideoID
    };

    return (
        <Context.Provider value={contextValues}>
            {props.children}
        </Context.Provider>
    );
};

