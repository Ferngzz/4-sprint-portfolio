import Textra from "react-textra";


export function Description() {


    return (
        <div className="description">
            <Textra
                effect={"scale"}
                duration={500}
                stopDuration={5000}
                data={["Hello, I'm Potato!" , "I like potato, potato and potato."]}
            />
        </div>
    );
}