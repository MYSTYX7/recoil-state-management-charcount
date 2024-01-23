import { useRecoilState } from "recoil";
import { textState } from "../recoil_state";

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>Character Counter</h1>
      <input type="text" value={text} onChange={onChange} />
      <br />
      <h3>&nbsp;{text}</h3>
    </div>
  );
};

export default TextInput;
