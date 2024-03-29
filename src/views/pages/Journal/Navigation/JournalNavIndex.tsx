import NoteCalendar from "./NavHeader/JournalCalendar";
import NoteList from "./NavNotes/NotesList";
import { getTrades } from "@/services/apis/demo/requests/trades";


// If one note exists on the day, no navigation sould show, and instead it should show "add another note"

function JournalNavIndex() {

    // const dispatch = useDispatch()
    // const activeNote = getActiveJournal()
    // const temp = data;
    const trades = getTrades()


    
    // if(!data) return <>Loading</>
    return (
        <div className="w-full bg-white h-full border-r border-r-gray-300">
            <NoteCalendar data={trades} />
            <NoteList />
        </div>
    )
}

export default JournalNavIndex;