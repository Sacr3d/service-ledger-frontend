import React from "react";
import { useLocation } from "react-router-dom";
import APIRootView from "../views/APIRoot";


export interface IAPIRootProps {
	apiRootUrl?: string
}

export default function APIRoot() {


	let apiRootState: IAPIRootProps = {
		apiRootUrl: undefined
	}

	const location = useLocation()

	if (location.state) {
		const { state } = location;
		apiRootState.apiRootUrl = (state as Record<string, string>).apiRootUrl
	}
	return (
		<APIRootView apiRootUrl={apiRootState.apiRootUrl} />
	)


}