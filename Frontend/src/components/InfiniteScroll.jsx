import React, { useEffect, useState } from "react";
import { InfiniteScrollCard } from "./InfiniteScrollCard";

const InfiniteScroll = () => {
  const [meme, setMeme] = useState([]);
  const [displayedMemes, setDisplayedMemes] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchMeme(); // Initial fetch

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    console.log("hi");
    if (
      window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 100 &&
      !isFetching
    ) {
      // Adding a buffer (100px) to trigger fetch before reaching the bottom
      console.log("hello");
      if (displayedMemes.length < meme.length) {
        setIsFetching(true);
        loadMoreMemes();
      }
    }
  };

  const fetchMeme = async () => {
    try {
      const data = await fetch("https://api.imgflip.com/get_memes");
      const json = await data.json();
      setMeme(json.data.memes);
      setDisplayedMemes(json.data.memes.slice(0, itemsPerPage));
      setCurrentIndex(itemsPerPage);
    } catch (error) {
      console.error("Failed to fetch memes", error);
    }
  };

  const loadMoreMemes = () => {
    // Slice from currentIndex to avoid duplicates
    const newItems = meme.slice(currentIndex, currentIndex + itemsPerPage);
    if (newItems.length > 0) {
      setDisplayedMemes((prevDisplayed) => [...prevDisplayed, ...newItems]);
      setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
    }
    setIsFetching(false);
  };

  return (
    <div className="flex flex-wrap">
      {displayedMemes.map((elem) => (
        <InfiniteScrollCard key={elem.id} url={elem.url} />
      ))}
    </div>
  );
};

export default InfiniteScroll;
