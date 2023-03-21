import GrandChild from "./GrandChild";


function Child() {
    return(
        <div style={{backgroundColor: "darkgray", padding: '3em'}}>
            Child
            <GrandChild/>
        </div>
    )
}

export default Child;