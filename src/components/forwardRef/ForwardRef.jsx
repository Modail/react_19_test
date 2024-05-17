import { useEffect, useRef, useImperativeHandle,forwardRef } from "react";

function Input({ ref }) {
    // useEffect(() => {
    //     //ref.current.focus();
    //     //ref.current.value = "Hello, World!";
    // }, [ref]);

    return (
        <div>
            <input
                ref={ref}
                className="rounded border border-gray-500 py-2 px-3 w-1/2"
                type="text"
            />
        </div>
    );
}

const  BeforeInput = forwardRef(function MyInput(props, ref) {
    const inputRef = useRef(null);
  
    useImperativeHandle(ref, () => {
      return {
        toFocus() {
          inputRef.current.focus();
        },
        setDefValue(){
        inputRef.current.value = "Hello, World!";
        }
      };
    }, []);
  
    return (
        <div>
            <input
                ref={inputRef}
                className="rounded border border-gray-500 py-2 px-3 w-1/2"
                type="text"
            />
        </div>
    );
  });

export default function InputContainer() {
    const ref = useRef(null);
    
    
    //before
    // useEffect(() => {
    //     ref.current.toFocus();
    //     //ref.current.value = "Hello, World!";
    // }, [ref]);
    // return <BeforeInput ref={ref} />;

    // after

    useEffect(() => {
        ref.current.focus();
        console.log("ref.current",ref.current);
        //ref.current.value = "Hello, World!";
    }, [ref]);
    return <Input ref={ref} />;


}
