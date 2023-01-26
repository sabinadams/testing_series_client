import Layout from "../components/layout";
import Quote from "./quote";
import { useQuotes } from "../contexts/QuotesContext";

export default function Home() {
  const { quotes } = useQuotes();

  return (
    <Layout>
      <div className="grid grid-cols-3 mx-auto w-2/3 space-x-2">
        {quotes.map((quote) => (
          <Quote quote={quote} key={quote.id} />
        ))}
      </div>
    </Layout>
  );
}
