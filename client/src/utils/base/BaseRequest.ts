import axios, { AxiosRequestConfig } from "axios";

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

	public async handleErrorResponse(error: unknown) {
		return {};
	}

	public async find({ routeParams = "", ...requestConfig }: RequestConfig) {
		try {
			const fullUrl = this.endpointUrl + routeParams;
			const response = await axios.get(fullUrl, requestConfig);
			return response.data;
		} catch (error) {
			return this.handleErrorResponse(error);
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
			return this.handleErrorResponse(error);
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
			return this.handleErrorResponse(error);
		}
	}

	public async update(
		payload: PayloadTypes,
		{ routeParams = "", ...requestConfig }: RequestConfigParamsRequired,
	) {
		try {
			const fullUrl = this.endpointUrl + routeParams;
			const response = await axios.post(fullUrl, payload, requestConfig);
			return response.data;
		} catch (error) {
			return this.handleErrorResponse(error);
		}
	}
}
