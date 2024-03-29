import JournalEditor from "@/views/components/JournalEditor";
import INote from "@/interface/INote";


function ModalTradeJournal({ journal }:ModalTradeJournalProps) {
    
    return (
        <div className="flex flex-col">

            <div className="mb-4">
                <h4 className="block mb-2 text-sm font-medium text-gray-900">Notes</h4>
                <div className="h-[330px] border">
                    {/* @ts-ignore */}
                    <JournalEditor editorValue={journal?.content}/>
                </div>
            </div>

            <div className="mb-4">
               <h4 className="block mb-2 text-sm font-medium text-gray-900">Confidence</h4>
                <span>1-10</span>
            </div>

            <div className="mb-4">
               <h4 className="block mb-2 text-sm font-medium text-gray-900">Emotions</h4>
                <span>1-10</span>
            </div>

            <div className="mb-4">
               <h4 className="block mb-2 text-sm font-medium text-gray-900">Reason for trade</h4>
                <span>1-10</span>
            </div>
        </div>
    )
}

export default ModalTradeJournal;

interface ModalTradeJournalProps {
    journal?: INote;
}
