import { useState } from "react";
import Example4 from "./components/action/Final";
import InputContainer from "./components/forwardRef/ForwardRef";
import Example3 from "./components/use-hook-context/Final";
import Example1 from "./components/use-hook-data-fetching/Final";
import Example2 from "./components/use-hook-promise/Final";
import Example6 from "./components/useActionState/Final";
import Example5 from "./components/useFormStatus/Final";
import Example7 from "./components/useOptimistic/Final";

export default function App() {
    const [example, setExample] = useState("");

    const handleChange = (e) => {
        setExample(e.target.value);
    };

    // choose which example to render
    let content;

    if (example === "example-1") {
        content = <Example1 />;
    }
    if (example === "example-2") {
        content = <Example2 />;
    }
    if (example === "example-3") {
        content = <Example3 />;
    }
    if (example === "action") {
        content = <Example4 />;
    }
    if (example === "useFormStatus") {
        content = <Example5 />;
    }
    if (example === "useActionState") {
        content = (
            <>
               <Example6 itemID="1" itemTitle="JavaScript: The Definitive Guide" />
               <Example6 itemID="2" itemTitle="JavaScript: The Good Parts" />
            </>
        );
    }
    if (example === "useOptimistic") {
        content = <Example7 />;
    }
    
    if (example === "forwardRef") {
        content = <InputContainer />;
    }

    return (
        <div className="p-12">
            <div className="mt-5">
                Some Example:
            </div>

            <div className="mt-10">
                <select onChange={handleChange}>
                    <option value="">Select example</option>
                    <option value="example-1">
                        &quot;use&quot; Hook width data fetching
                    </option>
                    <option value="example-2">
                        &quot;use&quot; Hook with promise
                    </option>
                    <option value="example-3">
                        &quot;use&quot; Hook with context
                    </option>
                    <option value="action">&quot;Form Action&quot;</option>
                    <option value="useFormStatus">
                        &quot;useFormStatus&quot;
                    </option>
                    <option value="useActionState">
                        &quot;useActionState&quot;
                    </option>
                    <option value="useOptimistic">
                        &quot;useOptimistic&quot;
                    </option>
                    <option value="forwardRef">&quot;forwardRef&quot;</option>
                </select>
            </div>

            <div className="mt-10">{content}</div>
        </div>
    );
}
