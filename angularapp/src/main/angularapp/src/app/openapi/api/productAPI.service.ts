/**
 * Till API
 * This app provides REST APIs for all associated till calls. From creating pages, products to transaction
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { Group } from '../model/group';
import { Product } from '../model/product';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ProductAPIService {

    protected basePath = '';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Creates a new group for products
     * Creates a new group that a product will be able to be associated with
     * @param body  The name of the group
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createGroup(body?: string, observe?: 'body', reportProgress?: boolean): Observable<Group>;
    public createGroup(body?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Group>>;
    public createGroup(body?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Group>>;
    public createGroup(body?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<Group>('post',`${this.basePath}/product/createGroup`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Creates a product
     * This method creates a product to be used within the system
     * @param body Product to create
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createProduct(body?: Product, observe?: 'body', reportProgress?: boolean): Observable<Product>;
    public createProduct(body?: Product, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Product>>;
    public createProduct(body?: Product, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Product>>;
    public createProduct(body?: Product, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<Product>('post',`${this.basePath}/product/createProduct`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes a given group
     * Removes the database entries for a given group.
     * @param body The group to be deleted
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteGroup(body?: Group, observe?: 'body', reportProgress?: boolean): Observable<boolean>;
    public deleteGroup(body?: Group, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<boolean>>;
    public deleteGroup(body?: Group, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<boolean>>;
    public deleteGroup(body?: Group, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<boolean>('post',`${this.basePath}/product/deleteGroup`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes a product by Id
     * Deletes the product associated with the given Id from the datbase
     * @param body Product to be deleted
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteProduct(body?: Product, observe?: 'body', reportProgress?: boolean): Observable<boolean>;
    public deleteProduct(body?: Product, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<boolean>>;
    public deleteProduct(body?: Product, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<boolean>>;
    public deleteProduct(body?: Product, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<boolean>('post',`${this.basePath}/product/deleteProduct`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets a group from the database
     * Gets a group from within the database, depending on the flag sent, the groups may also contain all their products too.
     * @param id Id of group to find
     * @param includeProducts Flag indicating if products also wanted
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getGroup(id: number, includeProducts: boolean, observe?: 'body', reportProgress?: boolean): Observable<Group>;
    public getGroup(id: number, includeProducts: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Group>>;
    public getGroup(id: number, includeProducts: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Group>>;
    public getGroup(id: number, includeProducts: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getGroup.');
        }

        if (includeProducts === null || includeProducts === undefined) {
            throw new Error('Required parameter includeProducts was null or undefined when calling getGroup.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (includeProducts !== undefined && includeProducts !== null) {
            queryParameters = queryParameters.set('includeProducts', <any>includeProducts);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Group>('get',`${this.basePath}/product/getGroup/${encodeURIComponent(String(id))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets all groups from the database
     * Gets all groups from within the database, depending on the flag sent, the groups may also contain all their products too.
     * @param includeProducts Flag indicating if products also wanted
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getGroups(includeProducts: boolean, observe?: 'body', reportProgress?: boolean): Observable<Array<Group>>;
    public getGroups(includeProducts: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Group>>>;
    public getGroups(includeProducts: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Group>>>;
    public getGroups(includeProducts: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (includeProducts === null || includeProducts === undefined) {
            throw new Error('Required parameter includeProducts was null or undefined when calling getGroups.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (includeProducts !== undefined && includeProducts !== null) {
            queryParameters = queryParameters.set('includeProducts', <any>includeProducts);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<Group>>('get',`${this.basePath}/product/getGroups`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get Product by Id
     * Gets the product associated with the given id from the database
     * @param id Id of product to find
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getProduct(id: number, observe?: 'body', reportProgress?: boolean): Observable<Product>;
    public getProduct(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Product>>;
    public getProduct(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Product>>;
    public getProduct(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getProduct.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Product>('get',`${this.basePath}/product/getProduct/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets all Products
     * Returns all products found within the database
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getProducts(observe?: 'body', reportProgress?: boolean): Observable<Array<Product>>;
    public getProducts(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Product>>>;
    public getProducts(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Product>>>;
    public getProducts(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<Product>>('get',`${this.basePath}/product/getProducts`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Updates a given group
     * Updates the database entries for a given group. Currently the only thing to be updated this way is the name
     * @param body The group to be updated
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateGroup(body?: Group, observe?: 'body', reportProgress?: boolean): Observable<boolean>;
    public updateGroup(body?: Group, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<boolean>>;
    public updateGroup(body?: Group, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<boolean>>;
    public updateGroup(body?: Group, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<boolean>('post',`${this.basePath}/product/updateGroup`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Updates a product
     * This method Updates a product within the system
     * @param body Product to be updated
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateProduct(body?: Product, observe?: 'body', reportProgress?: boolean): Observable<boolean>;
    public updateProduct(body?: Product, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<boolean>>;
    public updateProduct(body?: Product, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<boolean>>;
    public updateProduct(body?: Product, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<boolean>('post',`${this.basePath}/product/updateProduct`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
