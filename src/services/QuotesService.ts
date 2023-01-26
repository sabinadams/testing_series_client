import { toast } from "react-toastify";
import axios from "./HttpService";
import { Quote } from "../types";

export const getQuotes = async () => {
  const { data, status } = await axios.get<Quote[]>(`/quotes`);

  if (status !== 200) {
    toast.error("Could not get your quotes...");
  }

  return data;
};
