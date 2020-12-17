import { tags } from "react-ts-fns";
const { _, h1, p } = tags;

function App() {
    return _(null, [
        h1(null, "Create React App Fp-ts Template"),
        p(null, "cra-template-fp-ts"),
    ]);
}

export default App;
