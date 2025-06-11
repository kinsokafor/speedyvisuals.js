import { defineStore } from 'pinia';
import { dbTable, Request, storeGetter, updateStoreDataSingle, updateStoreData, storeLoaderController } from '@/helpers';
import _ from 'lodash';

export const useProjectsStore = defineStore('useProjectsStore', {
    state: () => {
        return {
            data: [],
            processing: false,
            fetching: false,
            limit: 100,
            offset: 0,
            dbtable: new dbTable,
            lastTimeOut: null
        }
    },
    actions: {
        async loadFromServer(params = {}) {
            for (var k in params) {
                //return when all data are not ready
                if (params[k] == undefined) return;
            }
            this.fetching = true;
            this.processing = true;
            await this.dbtable.get('tableName', {
                limit: this.limit,
                offset: this.offset,
                order: 'asc',
                order_by: 'id',
                ...params
            }).then(r => {
                if ("id" in params) {
                    this.data = updateStoreDataSingle(this.data, r.data)
                } else {
                    this.data = updateStoreData(this.data, r.data)
                    if (r.data.length >= this.limit) {
                        if('id' in params) {
                            this.offset = 0
                            return;
                        }
                        this.offset = this.limit + this.offset
                        storeLoaderController(this, () => {
                            this.loadFromServer(params)
                        })
                    } else {
                        this.offset = 0
                        if(this.lastTimeOut != null) {
                            clearTimeout(this.lastTimeOut)
                        }
                        this.lastTimeOut = setTimeout(() => {
                            this.fetching = false
                        }, 3600000)
                    }
                }
                
            })
        },

        abort() {
            this.dbtable.abort()
            this.fetching = false;
        }
    },
    getters: {
        all: (state) => {
            if (!state.fetching) {
                state.loadFromServer()
            }
            return state.data;
        },
        get: (state) => {
            const data = state.data
            return (params = {}, ...exclude) => {
                return storeGetter(state, data, (tempParams) => {
                    state.loadFromServer(tempParams)
                }, params, exclude)
            }
        }
    }
})

export const useMyProjectsStore = defineStore('useMyProjectsStore', {
    state: () => {
        return {
            data: [],
            processing: false,
            fetching: false,
            limit: 100,
            offset: 0,
            dbtable: new dbTable,
            lastTimeOut: null
        }
    },
    actions: {
        async loadFromServer(params = {}) {
            for (var k in params) {
                //return when all data are not ready
                if (params[k] == undefined) return;
            }
            this.fetching = true;
            this.processing = true;
            const req = new Request;
            await req.get(req.root+'/speedyvisuals/api/project/mine', {
                limit: this.limit,
                offset: this.offset,
                order: 'asc',
                order_by: 'id',
                ...params
            }).then(r => {
                if ("id" in params) {
                    this.data = updateStoreDataSingle(this.data, r.data)
                } else {
                    this.data = updateStoreData(this.data, r.data)
                    if (r.data.length >= this.limit) {
                        if('id' in params) {
                            this.offset = 0
                            return;
                        }
                        this.offset = this.limit + this.offset
                        storeLoaderController(this, () => {
                            this.loadFromServer(params)
                        })
                    } else {
                        this.offset = 0
                        if(this.lastTimeOut != null) {
                            clearTimeout(this.lastTimeOut)
                        }
                        this.lastTimeOut = setTimeout(() => {
                            this.fetching = false
                        }, 3600000)
                    }
                }
                
            })
        },
        
        async new(data) {
            const req = new Request;

            return await req.post(req.root+"/speedyvisuals/api/project/new", data).then(r => {
                this.data = updateStoreDataSingle(this.data, r.data);
                return r.data
            })
        },

        abort() {
            this.dbtable.abort()
            this.fetching = false;
        }
    },
    getters: {
        all: (state) => {
            if (!state.fetching) {
                state.loadFromServer()
            }
            return state.data;
        },
        get: (state) => {
            const data = state.data
            return (params = {}, ...exclude) => {
                return storeGetter(state, data, (tempParams) => {
                    state.loadFromServer(tempParams)
                }, params, exclude)
            }
        }
    }
})