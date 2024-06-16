import { ReactNode, createContext, useState } from "react";
import run from "../config/config";
// import * as marked from 'marked';

interface ContextProps {
  previousPrompt: string[];
  setPreviousPrompt: React.Dispatch<React.SetStateAction<string[]>>;
  onSent: (prompt: string) => Promise<void>;
  setRecentPrompt: React.Dispatch<React.SetStateAction<string>>;
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
  recentPrompt: string;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  showResult: boolean;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  resultData: string;
  setResultData: React.Dispatch<React.SetStateAction<string>>;
}

export const Context = createContext<ContextProps | undefined>(undefined);

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [input, setInput] = useState<string>("");
  const [recentPrompt, setRecentPrompt] = useState<string>("");
  const [previousPrompt, setPreviousPrompt] = useState<string[]>([]);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [resultData, setResultData] = useState<string>("");

  const onSent = async (prompt: string) => {
    setLoading(true);
    try {
      setResultData("");
      setShowResult(true);
      setRecentPrompt(prompt);
      const response = await run(input);
      const responsedata = response as string;
      console.log(responsedata);
      setResultData(responsedata);
      setInput("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const contextValue: ContextProps = {
    previousPrompt,
    setPreviousPrompt,
    onSent,
    setRecentPrompt,
    setShowResult,
    recentPrompt,
    loading,
    setLoading,
    showResult,
    input,
    setInput,
    resultData,
    setResultData,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
