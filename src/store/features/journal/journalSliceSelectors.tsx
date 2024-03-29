import { useSelector } from "react-redux";
import { IJournalState } from "./IJournalState";

export const getNoteByTradeID = (id:number | undefined) => useSelector((state: { journal: IJournalState }) => state.journal.notes.find(note => note.tradeID === id))
