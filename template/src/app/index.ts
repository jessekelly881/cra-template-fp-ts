import { tags } from "react-ts-fns";
const { _, h1, p } = tags;

function App() {
    return _(
        {},
        h1({}, "Create React App Fp-ts Template"),
        p({}, "cra-template-fp-ts"),
    );
}

export default App;
