import axios, { AxiosRequestConfig } from "axios";

import User from "../../types/User";
import settings from "../../app-settings";

export interface RequestConfig extends AxiosRequestConfig {
	routeParams?: string;
}

export interface RequestConfigParamsRequired extends RequestConfig {
	routeParams: string;
}

export type PayloadTypes = FormData | object;

export default class BaseRequest {
	baseUrl = settings.API_URL;
	public endpointUrl;

	constructor(endpointName: string) {
		this.endpointUrl = `${this.baseUrl}/${endpointName}`;
	}

	public createHeaders(token: string){
		return {
			"Authorization": "Bearer " + token
		}
	}

	public handleErrorResponse(error: any) {
		return new Error(error?.response?.data?.message,{cause: error?.response?.data?.error});
	}

	public async find({ routeParams = "", ...requestConfig }: RequestConfig) {
		try {
			const fullUrl = this.endpointUrl + routeParams;
			const response = await axios.get(fullUrl, requestConfig);
			return response.data;
		} catch (error) {
			throw this.handleErrorResponse(error);
		}
	}

	public async post(
		payload: PayloadTypes,
		{ routeParams = "", ...requestConfig }: RequestConfig,
	) {
		try {
			const fullUrl = this.endpointUrl + routeParams;
			const response = await axios.post(fullUrl, payload, requestConfig);
			return response.data;
		} catch (error) {
			throw this.handleErrorResponse(error);
		}
	}

	public async destroy({
		routeParams = "",
		...requestConfig
	}: RequestConfigParamsRequired) {
		try {
			const fullUrl = this.endpointUrl + routeParams;
			const response = await axios.delete(fullUrl, requestConfig);
			return response.data;
		} catch (error) {
			throw this.handleErrorResponse(error);
		}
	}

	public async update(
		payload: PayloadTypes,
		{ routeParams = "", ...requestConfig }: RequestConfigParamsRequired,
	) {
		try {
			const fullUrl = this.endpointUrl + routeParams;
			const response = await axios.put(fullUrl, payload, requestConfig);
			return response.data;
		} catch (error) {
			throw this.handleErrorResponse(error);
		}
	}
}
