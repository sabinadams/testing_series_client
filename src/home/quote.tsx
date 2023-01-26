import { Quote as IQuote } from "../types";

interface Props {
  quote: IQuote;
}

const Quote = ({ quote }: Props) => {
  function getContrastYIQ(hexcolor: string) {
    var r = parseInt(hexcolor.substring(1, 3), 16);
    var g = parseInt(hexcolor.substring(3, 5), 16);
    var b = parseInt(hexcolor.substring(5, 7), 16);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? "black" : "white";
  }
  return (
    <div
      key={quote.id}
      className="bg-white rounded-md shadow-solid p-4 mb-4 transition duration-300 ease-in-out hover:shadow-none hover:translate-x-2 hover:translate-y-2 border-2 border-gray-700"
    >
      <p className="text-gray-800">{quote.text}</p>
      <div className="flex items-center mt-4 space-x-1">
        {quote.tags?.map((tag) => (
          <div
            className="text-xs py-1 px-2 rounded-lg border-2 border-gray-800"
            style={{
              backgroundColor: tag.color,
              color: getContrastYIQ(tag.color),
            }}
          >
            {tag.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quote;
