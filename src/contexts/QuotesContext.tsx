import React, { useContext, useState, createContext } from "react";
import * as _quotes from "../services/QuotesService";
import { Quote, QuotesContextType } from "../types";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

let QuotesContext: React.Context<QuotesContextType>;

export function useQuotes() {
  return useContext(QuotesContext);
}

export const QuotesProvider: React.FC<Props> = ({ children }) => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);

  const value = {
    quotes,
  };

  QuotesContext = createContext({ quotes });

  useEffect(() => {
    _quotes
      .getQuotes()
      .then((data) => {
        setQuotes(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <QuotesContext.Provider value={value}>
      {!loading && children}
    </QuotesContext.Provider>
  );
};
