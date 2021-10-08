export const state = {
    loading: {
       global: false,
       submittingForm: false
    }
}
export const mutations = {
    toggleLoading: (state, payload) =>{
        const { type, val } = payload;
            if(type){
                if(type === "closeAll"){
                    Object.keys(state.loading).map( key => {
                        state.loading[key] = false;
                    });
                }else{
                    if(type && (Object.keys(state.loading).map(key => key).indexOf(type) !== -1)){
                        state.loading[type] = (val !== undefined) ? val : !state.loading[type];
                    }else {
                        throw "type should be a valid key";
                    }
                }   
            }
        return;
    }
}

export const actions = {
    toggleLoading: (state, payload) => {
       return state.commit("toggleLoading", payload);
    }
}
export const getters = {
    getLoading: state => {
        return state.loading;
    }
}