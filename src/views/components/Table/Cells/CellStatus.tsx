import { capitalizeFirstLetter } from "@/utils/common";

function CellStatus({ status }: { status?: CellStatus }) {

    const mediaTypes: Record<CellStatus, string> = {
        open: "bg-blue-300 text-blue-900",
        increased: "bg-green-300 text-green-900",
        decreased: "bg-red-300 text-red-900"
    };

    if(!status) return <></>
    return (
        <div className={`px-1.5 py-1 rounded-md w-full text-center text-xs ${mediaTypes[status]}`}>
            <span>{capitalizeFirstLetter(status)}</span>
        </div>
    );
}

export default CellStatus;

type CellStatus = "open" | "increased" | "decreased";