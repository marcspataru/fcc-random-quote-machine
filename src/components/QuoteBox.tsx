import { QUOTES } from "@/constants";
import React, { useState } from "react";
import styles from "@/components/QuoteBox.module.css";
import { useEffectOnce } from "react-use";
import { getRandomInt } from "@/utils";
import { useDispatch, useSelector } from "react-redux";
import { randomizeColor } from "@/redux/slices";
import { AppDispatch, RootState } from "@/redux/store";

export type Quote = {
  quote: string;
  author: string;
};

const QuoteBox = () => {
  // Cannot use a randomly generated here, since we will run into hydration errors. Will set the quote on a useEffectOnce hook, to be there on the first mount.
  const [quote, setQuote] = useState<Quote | null>(null);

  const reduxColor = useSelector((state: RootState) => state.color.value);
  const dispatch = useDispatch<AppDispatch>();

  useEffectOnce(() => {
    setQuote(QUOTES[getRandomInt(QUOTES.length)]);
  });

  return (
    <div id="quote-box" className={styles.quoteBox}>
      <div className={styles.topText}>
        <q id="text" style={{ color: reduxColor }}>
          {quote?.quote}
        </q>
        <span
          id="author"
          className={styles.author}
          style={{ color: reduxColor }}
        >
          {" - ".concat(quote?.author ?? "")}
        </span>
      </div>
      <div className={styles.bottomButtons}>
        <button
          id="new-quote"
          style={{ backgroundColor: reduxColor }}
          onClick={() => {
            setQuote(QUOTES[getRandomInt(QUOTES.length)]);
            dispatch(randomizeColor());
          }}
        >
          Give me another inspirational quote
        </button>
        <a
          id="tweet-quote"
          href="https://www.twitter.com/intent/tweet"
          className={styles.tweetQuote}
          style={{ color: reduxColor }}
        >
          Tweet this quote
        </a>
      </div>
    </div>
  );
};

export default QuoteBox;
