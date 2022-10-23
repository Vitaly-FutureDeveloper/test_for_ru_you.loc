import React from "react";
import MainForm from "./MainForm/MainForm";
import {FormType} from "../../types/types";
import {useDispatch} from "react-redux";
import {Response} from "./Response/Response";
import {getResponseTextThunk} from "../../redux/form-reducer/form-reducer";

export const FormPage:React.FC = () => {

	const dispatch = useDispatch();

	const onFormSubmit = (formValues:FormType) => {
		const {action, id, image, name, surname, patronymic} = formValues;
		// @ts-ignore
		dispatch( getResponseTextThunk(action, id, image, name, surname, patronymic) );
	};

	return <section>
		<MainForm onFormSubmit={onFormSubmit} />
		<Response />
	</section>
};

export default FormPage;