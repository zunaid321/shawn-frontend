import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";

export default class CommonStore {
    rootStore
    constructor(rootStore) {
        this.rootStore = rootStore
        makeAutoObservable(this);
    }
    services = {
        CBT: [],
        CC: [],
        CRE: [],
        CT: [],
        DR: [],
        EL: []
    };
    service  = null;
    news = null;
    peopleList = {
        Seniors: [],
        Associates: [],
        OffCouncel: []
    };
    newsList  = [];
    clients  = [];
    loadingServices = false;
    loadingService = false;
    loadingNewsList = false;
    loadingNews = false;
    loadingClients = false;
    loadingContact = false;
    loadingPeople = false;

    getServices = () => {
        try{
            runInAction( async() => {
                this.loadingServices = true;
                const servicesTemp =  await agent.Services.list();
                const services = {
                    CBT: [],
                    CC: [],
                    CRE: [],
                    CT: [],
                    DR: [],
                    EL: []
                };
                servicesTemp.forEach(element => {
                    switch(element.type){
                        case 'CBT':
                            services.CBT.push({id: element.id ,heading: element.heading});
                            break;
                        case 'CC':
                            services.CC.push({id: element.id ,heading: element.heading});
                            break;
                        case 'CRE':
                            services.CRE.push({id: element.id ,heading: element.heading});
                            break;
                        case 'CT':
                            services.CT.push({id: element.id ,heading: element.heading});
                            break;
                        case 'DR':
                            services.DR.push({id: element.id ,heading: element.heading});
                            break;
                        case 'EL':
                            services.EL.push({id: element.id ,heading: element.heading});
                            break;
                        default:
                            services.CBT.push({id: element.id ,heading: element.heading});
                            break;
                    }
                });
                this.services = services;
                this.loadingServices = false;
            });
        }catch(error){
            throw error;
        }
    }

    getService = (id) => {
        try{
            runInAction( async() => {
                this.loadingService = true;
                console.log('loading');
                const service =  await agent.Services.service(id);
                switch(service.type){
                    case 'CBT':
                        service.type = "Cross Border Transactions";
                        break;
                    case 'CC':
                        service.type = "Corporate & Compliance";
                        break;
                    case 'CRE':
                        service.type = "Construction & Real Estate";
                        break;
                    case 'CT':
                        service.type = "Commercial Transactions";
                        break;
                    case 'DR':
                        service.type = "Dispute Resolution";
                        break;
                    case 'EL':
                        service.type = "Employment & Labor";
                        break;
                    default:
                        service.type = "Cross Border Transactions";
                        break;
                }
                this.service = service;
                console.log(service);
                this.loadingService = false;
            });
        }catch(error){
            throw error;
        }
    }

    getNewsList = () => {
        try{
            
            runInAction( async() => {
                this.loadingNewsList = true;
                const newsList =  await agent.News.list();
                this.newsList = newsList;
                this.loadingNewsList = false;
            });
        }catch(error){
            throw error;
        }
    }
    
    getNews = (id) => {
        try{
            
            runInAction( async() => {
                this.loadingNews = true;
                const news =  await agent.News.news(id);
                this.news = news;
                this.loadingNews = false;
            });
        }catch(error){
            throw error;
        }
    }

    getClients = () => {
        try{
            runInAction( async() => {
                this.loadingClients = true;
                console.log(this.loadingClients);
                const clients =  await agent.Clients.list();
                this.clients = clients;
                this.loadingClients = false;
                console.log(this.loadingClients);
            });
        }catch(error){
            throw error;
        }
    }

    submitContact = async(body) => {
        try{
            runInAction( async() => {
                this.loadingContact = true;
                await agent.Contact.contact(body);
                this.loadingContact = false;
            });
        }catch(error){
            throw error;
        }
    }

    getPeople = () => {
        try{
            runInAction( async() => {
                this.loadingPeople = true;
                const peopleTemp =  await agent.Services.list();
                const peopleList = {
                    Seniors: [],
                    Associates: [],
                    OffCouncel: []
                };
                peopleTemp.forEach(element => {
                    switch(element.type){
                        case 'Senior':
                            services.Seniors.push({name: element.name ,picture: element.picture, credentials: element.credentials, description: element.description});
                            break;
                        case 'Associate':
                            services.Associates.push({name: element.name ,picture: element.picture, credentials: element.credentials, description: element.description});
                            break;
                        case 'Off Councel':
                            services.OffCouncel.push({name: element.name ,picture: element.picture, credentials: element.credentials, description: element.description});
                            break;
                        default:
                            services.Associates.push({name: element.name ,picture: element.picture, credentials: element.credentials, description: element.description});
                            break;
                    }
                });
                this.peopleList = peopleList;
                this.loadingPeople = false;
            });
        }catch(error){
            throw error;
        }
    }
}
