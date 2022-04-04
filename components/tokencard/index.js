import { useToken } from "../../context/tokenContext"
export default function TokenoCard(params) {
    const {contract} = useToken();
    console.log(contract)
    return(
        <>
        token card
        </>
    )
};
