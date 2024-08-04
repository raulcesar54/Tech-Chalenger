import { createContext, useCallback, useContext, useState } from "react";
interface ShowFormProps {
  showForm: boolean;
  handleShowForm: () => void;
  handleHiddenForm: () => void;
}
const ShowFormContext = createContext({} as unknown as ShowFormProps);
export const ShowFormProvider = ({ children }: { children: JSX.Element }) => {
  const [showForm, setShowForm] = useState(false);
  const handleShowForm = useCallback(() => {
    setShowForm(true);
  }, [showForm]);
  const handleHiddenForm = useCallback(() => {
    setShowForm(false);
  }, [showForm]);
  return (
    <ShowFormContext.Provider
      value={{ showForm, handleShowForm, handleHiddenForm }}
    >
      {children}
    </ShowFormContext.Provider>
  );
};
export const useShowForm = () => useContext(ShowFormContext);
