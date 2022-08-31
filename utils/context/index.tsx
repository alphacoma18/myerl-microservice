import React, { useState } from "react";
interface IGlobalContext {
	isRedirect: boolean;
	handleIsRedirect: () => void;
}
const GlobalContext = React.createContext<IGlobalContext>({
	isRedirect: false,
	handleIsRedirect() {},
});
export default GlobalContext;

interface Props {
	children: React.ReactNode;
}
export interface User {
	account_id: number;
	account_first_name: string;
	account_last_name: string;
	account_section_id: number;
	section_grade: number;
	section_strand: string;
	section_name: string;
}
export const ContextProvider: React.FC<Props> = ({ children }) => {
	// logic is backwards
	const [isRedirect, setIsRedirect] = useState<boolean>(true);
	function handleIsRedirect() {
		setIsRedirect((prev) => !prev);
	}
	/*Using the code below fixes the backwards logic but flickers*/

	// useEffect(() => {
	// 	setIsRedirect((prev) => !prev);
	// }, []);
	return (
		<GlobalContext.Provider
			value={{
				isRedirect,
				handleIsRedirect,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
